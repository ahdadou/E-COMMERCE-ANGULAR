import { ProductService } from './../../share/product.service';
import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Product} from '../../models/ProductModule';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  url = 'http://localhost:8008/images/products/';
  constructor(private productService: ProductService,  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(): any{
    this.productService.getProduct().subscribe(
      (p: Product[]) => {this.products = p; console.log(this.products); },
      e => {console.log(e); }
    );
  }


  removeProduct(id): any{
   this.productService.deleteProduct(id)
   .subscribe(
    p => {this.toastr.success(`Delete product successfully`, 'Delete successfully', {
      timeOut: 1500,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right'
    });
    this.fetchProduct();
  },
  err => {this.toastr.error(`Can't delete product`, 'Delete Error', {
    timeOut: 1500,
    progressBar: true,
    progressAnimation: 'increasing',
    positionClass: 'toast-top-right'
  });
  }
  );
  }

}
