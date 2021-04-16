import { CartFrontEnd } from './../models/Cart';
import { Product } from './../models/ProductModule';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartClient = {
                  count: 0,
                  products: [{
                      product: undefined,
                      qte: 0,
                            }]
                };
  cartStorage = {
                  count: 0,
                  products: [{
                      id: undefined,
                      qte: 0,
                            }]
                };


  total$ = new BehaviorSubject<number>(0);
  cartService$ = new BehaviorSubject<CartFrontEnd>(this.cartClient);



  // Add Product to client and service Sides
  addProduct(prod: Product): any{

   if (this.cartClient.products[0].product === undefined){

      this.cartClient = {
        count: 1,
        products: [{
            product: prod,
            qte: 1,
                  }]
                }


   }else{

        let i =  this.cartClient.products.findIndex(p => p.product.product_id === prod.product_id);
        if ( i > -1 ){
              this.cartClient.products[i].qte++;

            }else{

            this.cartClient.count++;
            this.cartClient.products.push({product: prod, qte: 1});

            }
      }
   this.updateCartInLocalstorage();
   this.calculeTotal();
   this.cartService$.next(this.cartClient);
  }




  updateCartInLocalstorage(): any{
    console.log(this.cartClient);

    // if (this.cartStorage.products[0].id === undefined){
    //   this.cartStorage.products.splice(0);
    // }

    this.cartStorage.products = [];

    localStorage.removeItem('cart');
    this.cartStorage.count = this.cartClient.count;
    this.cartClient.products.forEach(
                              p => this.cartStorage.products.push(
                                      {id: p.product.product_id, qte: p.qte}));
    localStorage.setItem('cart', JSON.stringify(this.cartStorage));
  }


  // Final Price
  calculeTotal(): any{
    let price = 0;


    this.cartClient.products.forEach(p => price += p.product.price * p.qte);
    this.total$.next(price);
  }
















}
