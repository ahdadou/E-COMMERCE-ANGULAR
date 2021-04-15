import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AdminsComponent } from './admins/admins.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../share/AuthInterceptor';



@NgModule({
  declarations: [
    ProductsComponent,
    LoginComponent,
    ProductdetailsComponent,
    AdminsComponent,
    AdmindetailsComponent,
    UsersComponent,
    UserdetailsComponent,
    HomeComponent,
    DashboardComponent,
    LeftmenuComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  // ],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptor,
  //     multi: true
  //   }
  ],
})
export class AdminModule { }
