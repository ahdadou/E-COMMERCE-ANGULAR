import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  URL_LO = environment.URL_LOCAL;
  constructor(private http: HttpClient,  private toastr: ToastrService, private router: Router) { }


   addNewOrders(info): Observable<any>{

     let data = JSON.parse(localStorage.getItem('cart'));
     return this.http.post(this.URL_LO + "orders/new",{orderDetails:info,orders:data.products});
  }

  // getPayement(): any{
  //   this.http.get(this.URL_LO + "orders/payement");
  // }






}
