import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../produit.service';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { Storage } from '@ionic/storage';
import { Panier } from 'src/app/panier/panier.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-categorie-produit',
  templateUrl: './categorie-produit.page.html',
  styleUrls: ['./categorie-produit.page.scss'],
})
export class CategorieProduitPage implements OnInit {

  produits: Product[];
  category: string;
  numberCategory: number;
  quantitySelected: string[];


  constructor(private activatedRoute: ActivatedRoute, public productService: ProductService,
    private cdref: ChangeDetectorRef, public storage: Storage, public toaster: ToastController) {
    this.quantitySelected = ["1", "2", "3", "4", "5", "6", "Retirer du panier"];
  }

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category');
    console.log(this.category);

    if (!this.produits) {
      this.productService.getProduits().subscribe(resp => {
        this.produits = resp;
        console.log(this.produits);
      });

    }

    if (this.category && this.category != 'Promotions') {
      this.numberCategory = parseFloat(this.category);
    }

  }

  addToCart(produit: Product) {
    console.log(produit);
    this.getCommentToster(produit);
  }

  quantityChange(value: string, produit: Product) {
    console.log(value, produit);
    if (value != "Retirer du panier") {
      produit.quantity = parseFloat(value);
      if(produit.discount){
        produit.netPrice = produit.quantity * produit.discount;
      }else{
        produit.netPrice = produit.quantity * produit.price;
      }
    }
    else if (value === "Retirer du panier") {
      produit.quantity = null;
    }
    let added: boolean = false;
    this.storage.get("Cart").then((panier: Panier) => {
      //Si le panier est vide
      if (panier === null) {
        panier = new Panier();
        panier.products = new Array(0);
        panier.products.push(produit);
        panier.totalPrice = produit.netPrice;
      } else {
        //Si le panier n'est pas vide
        for (let i = 0; i < panier.products.length; i++) {
          const element: Product = panier.products[i];
          //si un des elements est égale au panier
          if (produit.id === element.id) {
            //retire le produit si la quantité est nulle  
            if (produit.quantity === null) {
              panier.totalPrice -= produit.netPrice;
              panier.products.splice(i, 1);
              added = true;
              console.log("panier dans splice", panier);
            } else {
              //met à jour l'item si il existe deja dans le panier
              element.quantity = produit.quantity;
              if(element.discount){
                element.netPrice = produit.quantity * element.discount;
              }else{
                element.netPrice = produit.quantity * element.price;
              }
              added = true;
            }
          }
        }
        if (!added) {
          //le panier n'est pas vide et ne contient pas l'article
          if(produit.discount > 0){
            produit.netPrice = produit.quantity * produit.discount;
          }else{
            produit.netPrice = produit.quantity * produit.price;
          }
          panier.products.push(produit);
        }

        //quoiqu'il arrive faut refaire le calcul du total
        panier.totalPrice = 0;
        for (let i = 0; i < panier.products.length; i++) {
          panier.totalPrice += panier.products[i].netPrice;
        }
      }
      this.storage.set("Cart", panier)
        .then(panier => {
          this.getToster();
        })
        .catch(err => {
          alert("Erreur" + err);
        })
    })
  }

  async getToster() {
    const toast = await this.toaster.create({
      message: "Votre panier a été mis à jour",
      duration: 1500,
      buttons: [
        {
          text: 'X',
          role: 'cancel'
        }
      ],
      position: "top",
      color: "success",
      cssClass: "text-align:center"
    });
    toast.present();
  }

  async getCommentToster(produit: Product) {
    const toast = await this.toaster.create({
      message: produit.comments,
      duration: 1500,
      buttons: [
        {
          text: 'X',
          role: 'cancel'
        }
      ],
      position: "top",
      color: "tertiary",
      cssClass: "text-align:center"
    });
    toast.present();
  }

  ionViewWillEnter() {
    this.storage.get("Cart").then((data: Panier) => {
      if (data != null) {
        for (let i = 0; i < this.produits.length; i++) {
          for (let j = 0; j < data.products.length; j++) {
            if (this.produits[i].id === data.products[j].id) {
              this.produits[i].quantity = data.products[j].quantity;
            }else{
              this.produits[i].quantity = 0;
            }
          }
        }
      }
    })
      .catch(err => {
        console.log("Erreur", err); 
      })
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges()
  }
}
