export interface ProductContract{
    id:number;
    title:string;
    image:string;
    description:string;
    category:string;
    rating:{rate:number,count:number}
}