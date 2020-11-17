import { Product } from "../produitFolder/product.model";

export interface IPanier{
	id?:number,
	products?: Product[],
	netPrice?: number,
	totalPrice?: number,
	relayPoints?: string[]	
}

export class Panier implements IPanier{
    public id:number;
    public products:Product[];
    public netPrice: number;
    public totalPrice:number;
    public relayPoints: string[];

}