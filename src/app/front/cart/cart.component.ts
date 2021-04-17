import { Component, OnInit } from '@angular/core';
import { CartFrontEnd } from 'src/app/models/Cart';
import { CartService } from 'src/app/share/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  data: CartFrontEnd;
  total: any;
  url = 'http://localhost:8008/images/products/';

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.cartService$.subscribe( (d) => {this.data = d; console.log('this is    '+JSON.stringify(d))});
    this.cartService.total$.subscribe( (t) => this.total = t);

  }



  plus(v, id): any {
   this.cartService.updateItem(v, id);
  }

}
