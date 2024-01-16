import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../models/product.model";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";
import {CategoryModel} from "../models/category.models";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent{
  newProduct : ProductModel = new ProductModel();
  categories : CategoryModel[];
  newCategory! : CategoryModel;
  newCategryId! : number;
  constructor(private productService : ProductService,private router : Router) {

    this.categories = productService.categoriesList();
  }
  addProduct(){
    this.newCategory = this.productService.editCategory(this.newCategryId);
    this.newProduct.category = this.newCategory;
    this.productService.addProduct(this.newProduct);
    this.router.navigate(['products-list'])
  }

}
