import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../produit.service';

import { ActivatedRoute } from '@angular/router';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
@Component({
  selector: 'app-categorie-produit',
  templateUrl: './categorie-produit.page.html',
  styleUrls: ['./categorie-produit.page.scss'],
})
export class CategorieProduitPage implements OnInit {

  produits:Product[];
  category:string;
  numberCategory:number;

  constructor(private activatedRoute: ActivatedRoute, public productService: ProductService) { }

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

}
