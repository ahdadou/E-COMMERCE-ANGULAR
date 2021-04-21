import { CartFrontEnd, CartLocalStrage } from './../models/Cart';
import { Product } from './../models/ProductModule';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cartClient: CartFrontEnd = {
    count: 0,
    products: [
      {
        product: undefined,
        qte: 0,
      },
    ],
  };
  private cartStorage: CartLocalStrage = {
    count: 0,
    products: [
      {
        id: undefined,
        qte: 0,
      },
    ],
  };

  total$ = new BehaviorSubject<number>(0);
  cartService$ = new BehaviorSubject<CartFrontEnd>(this.cartClient);







  constructor(private productService: ProductService) {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (cart != null) {
      this.cartStorage = cart;
      this.cartClient.count = this.cartStorage.count;
      this.cartStorage.products.forEach((p) => {
        this.productService.getProductById(p.id).subscribe(
          (r) => {
            if (this.cartClient.products[0].product === undefined) {
              this.cartClient.products[0].product = r;
              this.cartClient.products[0].qte = p.qte;
            } else {
              this.cartClient.products.push({ product: r, qte: p.qte });
              this.calculeTotal();
            }
          },
          (error) => console.log('errrro  :' + error)
        );
      });
    }
    this.cartClient.count = this.cartStorage.products.length;
    console.log(this.cartClient);
    // this.calculeTotal();
    this.cartService$.next(this.cartClient);
  }

  // Add Product to client and service Sides
  addProduct(prod: Product): any {
    if (
      this.cartClient.products[0]?.product === undefined ||
      this.cartClient.products === undefined
    ) {
      this.cartClient = {
        count: 1,
        products: [
          {
            product: prod,
            qte: 1,
          },
        ],
      };
    } else {
      let i = this.cartClient.products.findIndex(
        (p) => p.product.product_id === prod.product_id
      );
      if (i > -1) {
        // tslint:disable-next-line:max-line-length
        this.cartClient.products[i].qte <
        this.cartClient.products[i].product.quantite
          ? this.cartClient.products[i].qte++
          : this.cartClient.products[i].product.quantite;
      } else {
        this.cartClient.products.push({ product: prod, qte: 1 });
      }
    }
    this.cartClient.count = this.cartClient.products.length;
    this.updateCartInLocalstorage();
    this.calculeTotal();
    this.cartService$.next(this.cartClient);
  }



  updateItem(v: boolean, id: number): any{

    let i = this.cartClient.products.findIndex((p) => p.product.product_id === id);
    if (v){
      this.cartClient.products[i].product.quantite
      ? this.cartClient.products[i].qte++
      : this.cartClient.products[i].product.quantite;
    }else{
      if (this.cartClient.products[i].qte <= 1)
      {
this.cartClient.products.splice(i, 1);
      }
      else
      {
        this.cartClient.products[i].qte--;
      }

    }


    this.cartClient.count = this.cartClient.products.length;
    this.updateCartInLocalstorage();
    this.calculeTotal();
    this.cartService$.next(this.cartClient);
  }


  // Remove from cart

  removeItem(i: number): any {
    this.cartClient.products.splice(i, 1);
    if (this.cartClient.products.length == 0) { this.cartClient.products = []; }
    this.cartClient.count = this.cartClient.products.length;
    this.updateCartInLocalstorage();
    this.calculeTotal();
    this.cartService$.next(this.cartClient);
  }

  updateCartInLocalstorage(): any {
    console.log(this.cartClient);

    // if (this.cartStorage.products[0].id === undefined){
    //   this.cartStorage.products.splice(0);
    // }

    this.cartStorage.products = [];

    localStorage.removeItem('cart');
    this.cartStorage.count = this.cartClient.count;
    this.cartClient.products.forEach((p) =>
      this.cartStorage.products.push({ id: p.product.product_id, qte: p.qte })
    );
    localStorage.setItem('cart', JSON.stringify(this.cartStorage));
  }

  // Final Price
  calculeTotal(): any {
    let price = 0;
    this.cartClient.products.forEach(
      (p) => (price += p.product.price * p.qte)
    );
    this.total$.next(price);
  }
}
