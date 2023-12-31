import { Component,OnInit } from '@angular/core';
import { Products} from '../products';

import { ProductsService } from '../products.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent implements OnInit {

  products:any;

 

  constructor(private productsService:ProductsService,

    private router:Router){}




ngOnInit(): void {

  this.getProducts();

}




private getProducts(){

  this.productsService.getProductlist().subscribe(data=>

    {

      this.products=data;

    });

}




productdetails(productId:number){

  this.router.navigate(['productdetails',productId]);

}




updateProduct(productId:number){

  this.router.navigate(['updateproducts',productId]);

}




deleteProduct(productId:number){

 this.productsService.deleteProduct(productId).subscribe(data=>{

    console.log(data);

    this.getProducts();

 });

}




}
