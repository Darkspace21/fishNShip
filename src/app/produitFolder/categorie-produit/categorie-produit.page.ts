import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../produit.service';

@Component({
  selector: 'app-categorie-produit',
  templateUrl: './categorie-produit.page.html',
  styleUrls: ['./categorie-produit.page.scss'],
})
export class CategorieProduitPage implements OnInit {

  produits:Product[];

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduits().subscribe(resp=>{
      this.produits = resp;
      console.log(this.produits);
    })
  }

}
