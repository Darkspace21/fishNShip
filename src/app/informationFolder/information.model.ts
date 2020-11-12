export interface IInformation{
	id: number,
	name: string,
	category: string,
	description: string,
	image: string 
}

export class Information implements IInformation{
    public id: number;
    public name: string;
    public category: string;
    public description: string;
    public image: string;

}