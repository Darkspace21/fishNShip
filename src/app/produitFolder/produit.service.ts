import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient) { }
  getProduits(){
    return this.httpClient.get<Product[]>("../assets/produit.json");
  }

}