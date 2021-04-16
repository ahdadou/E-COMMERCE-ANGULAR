import { CartService } from './../../share/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartFrontEnd } from 'src/app/models/Cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data: CartFrontEnd;
  total: number;
  url = 'http://localhost:8008/images/products/';


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.total$.subscribe( (t) => this.total = t);
    this.cartService.cartService$.subscribe( (d) => this.data = d);
  }

}
