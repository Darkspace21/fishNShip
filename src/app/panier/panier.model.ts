import { ImplicitReceiver } from '@angular/compiler';
import { Product } from "../produitFolder/product.model";

export interface IPanier{
	id?:number,
	products?: Product[],
	netPrice?: number,
	totalPrice?: number,
    relayPoints?: string[]	
    relaySelected?: string;
}

export class Panier implements IPanier{
    public id?:number;
    public products?:Product[];
    public netPrice?: number;
    public totalPrice?:number;
    public relayPoints?: string[];
    public relaySeleted?: string;

    
}


export interface IItemCart {
    item?:Product;
}

export class ItemCart implements IItemCart{
    public item?:Product;
}