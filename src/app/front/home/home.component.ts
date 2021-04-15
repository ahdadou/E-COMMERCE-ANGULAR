import { Product } from './../../models/ProductModule';
import { ProductService } from './../../share/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  url = 'http://localhost:8008/images/products/';

  constructor(private productService: ProductService) { }

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




}
