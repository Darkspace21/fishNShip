import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../produit.service';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { Storage } from '@ionic/storage';
import { Panier } from 'src/app/panier/panier.model';

@Component({
  selector: 'app-categorie-produit',
  templateUrl: './categorie-produit.page.html',
  styleUrls: ['./categorie-produit.page.scss'],
})
export class CategorieProduitPage implements OnInit {

  produits:Product[];
  category:string;
  numberCategory:number;
  quantitySelected:string[];


  constructor(private activatedRoute: ActivatedRoute, public productService: ProductService,
     private cdref: ChangeDetectorRef, public storage: Storage) { 
    this.quantitySelected = ["1","2","3","4","5","6","Supprimer"];
  }

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category');
    console.log(this.category);

    if(!this.produits){
      this.productService.getProduits().subscribe(resp=>{
        this.produits = resp;
        console.log(this.produits);
      });
  
    }

    if(this.category && this.category!='Promotions'){
      this.numberCategory = parseFloat(this.category);
    }

  }

  addToCart(produit:Product){
    console.log(produit); 
  }

  quantityChange(value:string,produit:Product){
    console.log(value,produit);
    if(value != "Supprimer")
    {
      produit.quantity = parseFloat(value);
      produit.netPrice = produit.quantity * produit.price;
    }
    else if (value === "Supprimer"){
      produit.quantity = null;
    }
    // this.storage.set("produit", produit)
    // .then(value => alert("Votre commande de " + value.name + " a bien été enregistré!!!"))
    // .catch(err => console.log(err));     
    let added : boolean = false;
    this.storage.get("Cart").then((panier:Panier)=>{
      //Si le panier est vide
      if(panier === null){
        panier = new Panier();
        panier.products = new Array(0);
        panier.products.push(produit);
        panier.totalPrice = produit.netPrice;
      }else{
        //Si le panier n'est pas vide
        for(let i = 0; i < panier.products.length; i++){
          const element: Product = panier.products[i];
          if(produit.id === element.id){
            element.quantity = produit.quantity;
            element.netPrice = produit.quantity * element.price;
            panier.totalPrice += element.netPrice;
            added = true;
          }
        }
        if(!added){
          //le panier n'est pas vide et ne contient pas l'article
          panier.products.push(produit);
          panier.totalPrice += produit.netPrice;
        }
      }
      this.storage.set("Cart",panier);
    })
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges()   
  }
}
