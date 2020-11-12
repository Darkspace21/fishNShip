import { Product } from "../produitFolder/product.model";

export interface IPannier{
	id?:number,
	products?: Product[],
	netPrice?: number,
	totalPrice?: number,
	relayPoints?: string[]	
}

export class Pannier implements IPannier{
    public id:number;
    public products:Product[];
    public netPrice: number;
    public totalPrice:number;
    public relayPoints: string[];

}