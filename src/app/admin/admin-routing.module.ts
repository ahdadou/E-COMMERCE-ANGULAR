import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuardGuard } from '../share/admin-guard.guard';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { AdminsComponent } from './admins/admins.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'admins', component: AdminsComponent, canActivate: [AdminGuardGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AdminGuardGuard]},
  {path: 'adminDetails/:id', component: AdmindetailsComponent, canActivate: [AdminGuardGuard]},
  {path: 'products', component: ProductsComponent, canActivate: [AdminGuardGuard]},
  {path: 'productDetails/:id', component: ProductdetailsComponent, canActivate: [AdminGuardGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AdminGuardGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuardGuard]},
  {path: 'userDetails/:id', component: UserdetailsComponent, canActivate: [AdminGuardGuard]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
