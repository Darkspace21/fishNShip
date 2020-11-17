import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../produit.service';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { Storage } from '@ionic/storage';

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
    }
    else{
      produit.quantity = null;
    }
    this.storage.set("produit", produit)
    .then(value => alert("Votre commande de " + value.name + " a bien été enregistré!!!"))
    .catch(err => console.log(err));     
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges()   
  }
}
