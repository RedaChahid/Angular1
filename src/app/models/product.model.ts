import {CategoryModel} from "./category.models";

export class ProductModel{
  productId? : number;
  productName? : string;
  productPrice? : number;
  dateCreation? : Date;
  category? : CategoryModel;

}
