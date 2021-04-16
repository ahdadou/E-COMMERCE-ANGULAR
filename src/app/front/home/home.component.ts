import { Product } from './../../models/ProductModule';
import { ProductService } from './../../share/product.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/share/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  url = 'http://localhost:8008/images/products/';

  constructor(private productService: ProductService, private cartservice: CartService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): any{
    this.productService.getProduct().subscribe(
      (sec) => {
       this.products = sec;
      },
      err => {
        console.log(err);
      }
    );
  }

  fetDataByCategory(cat): any{
    this.productService.getProductByCategory(cat).subscribe(
      (sec) => {
       this.products = sec;
      },
      err => {
        console.log(err);
      }
    );
  }




  addToCart(product): any{
  this.cartservice.addProduct(product);
  }




}
