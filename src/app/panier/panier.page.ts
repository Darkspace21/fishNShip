import { ThrowStmt } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Panier } from './panier.model';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Product } from '../produitFolder/product.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage {
  panier: Panier;
  quantitySelected:string[];
  constructor(public storage: Storage, public toaster: ToastController,private cdref: ChangeDetectorRef) { 
    this.quantitySelected = ["1","2","3","4","5","6","Retirer du panier"];
  }

  ionViewWillEnter() {
    console.log("CartPage");
    this.storage.get("Cart").then((data: Panier)=>{
      this.panier = data;
    })
    .catch(err=>{
      console.log("Erreur",err);
    }) 
    
  }

  quantityChange(value:string,produit:Product){
    if(value != "Retirer du panier")
    {
      produit.quantity = parseFloat(value);
      produit.netPrice = produit.quantity * produit.price;
    }
    else if (value === "Retirer du panier"){
      produit.quantity = null;
    } 
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
          //si un des elements est égale au panier
          if(produit.id === element.id){
            //retire le produit si la quantité est nulle  
            if(produit.quantity === null){
              panier.totalPrice -= produit.netPrice;
              panier.products.splice(i,1);
              added = true;
            }else{
              //met à jour l'item si il existe deja dans le panier
              element.quantity = produit.quantity;
              element.netPrice = produit.quantity * element.price;
              added = true;
            }   
          }
        }
        if(!added){
          //le panier n'est pas vide et ne contient pas l'article
          produit.netPrice = produit.quantity * produit.price
          panier.products.push(produit); 
        }

        //quoiqu'il arrive faut refaire le calcul du total
        panier.totalPrice = 0;
        for(let i = 0; i < panier.products.length; i++){
          panier.totalPrice += panier.products[i].netPrice;
        }
      }
      this.storage.set("Cart",panier)
      .then(panier=>{
        this.getToster();
        this.panier = panier;
      })
      .catch(err=>{
        alert("Erreur" + err);
      })
    })
  }

  async getToster(){
    const toast = await this.toaster.create({
      message: "Votre panier a été mis à jour",
      duration:1500,
      buttons:[
        {
          text: 'X',
          role:'cancel'
        }
      ],
      position:"top",
      color:"success",
      cssClass:"text-align:center"  
    });
    toast.present();
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges()   
  }

  order(){
    this.storage.clear();
  }

}
