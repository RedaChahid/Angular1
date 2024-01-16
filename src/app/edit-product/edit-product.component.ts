import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../models/product.model";
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryModel} from "../models/category.models";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  currentProduct : ProductModel = new ProductModel();
  categories! : CategoryModel[];
  newCategory! : CategoryModel;
  newCategryId! : number;
  constructor(
    private productService : ProductService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) {
    this.categories = this.productService.categoriesList();
  }
  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.params['id']);
   this.currentProduct = this.productService.editProduct(this.activatedRoute.snapshot.params['id']);
   this.newCategryId = this.currentProduct.category?.categoryId!;
  }
  updateProduct(){
    this.newCategory = this.productService.editCategory(this.newCategryId);
    this.currentProduct.category = this.newCategory;
    this.productService.updateProduct(this.currentProduct)
    this.router.navigate(['products-list'])
  }
}
