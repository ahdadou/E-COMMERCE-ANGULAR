import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './authen/login/login.component';
import { RegisterComponent } from './authen/register/register.component';
import { OutlerComponent } from './outler/outler.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [HeaderComponent,
    FooterComponent,
    HomeComponent, ProductsComponent,
  ProductdetailsComponent,
  LoginComponent,
    RegisterComponent,
    OutlerComponent,
    CartComponent,
    CheckoutComponent],
  imports: [
    CommonModule,
    FrontRoutingModule
  ],
  
})
export class FrontModule { }
