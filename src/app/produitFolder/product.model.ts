export interface IProduct{
    id?:number,
    name?: string,
    category?: number,
    price?: number,
    unit?: string,
    availability?: boolean,
    sale?: boolean,
    discount?: number,
    comments?: string,
    owner?: string,
    quantity?: number
}

export class Product implements IProduct {
    public id:number;
    public name: string;
    public category?: number;
    public price?: number;
    public unit?: string;
    public availability?: boolean;
    public sale?: boolean;
    public discount?: number;
    public comments?: string;
    public owner?: string;
    public quantity?: number;
}