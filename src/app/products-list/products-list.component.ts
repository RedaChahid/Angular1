import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../models/product.model";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  {
  products : ProductModel[];
  constructor(private productService : ProductService) {
  this.products = productService.productsList();
  }
  deleteProduct(product : ProductModel){
    let message = confirm("Are you sure to delete this product ?")
    if (message)
     this.productService.deleteProduct(product)
  }
}
