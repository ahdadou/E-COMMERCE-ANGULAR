import { Router } from '@angular/router';
import { UserService } from 'src/app/share/user.service';
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
  islogin = false;
  total: number;
  url = 'http://localhost:8008/images/products/';


  constructor(private cartService: CartService, private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userService.islogin$.subscribe(res => this.islogin = res);
    this.cartService.total$.subscribe( (t) => this.total = t);
    this.cartService.cartService$.subscribe( (d) => this.data = d);
  }

  logout(): any{
    this.userService.logout();
    this.router.navigate(['']);
  }

  login():any{
    this.router.navigate(['first/login']);
  }

}
