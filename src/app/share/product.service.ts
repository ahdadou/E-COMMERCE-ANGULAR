import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  URL_LO = environment.URL_LOCAL;
  constructor(private http: HttpClient,  private toastr: ToastrService, private router: Router) { }


  // GET PRODUCT
  getProduct(): Observable<any>{
  return this.http.get(this.URL_LO + 'all/products');
  }


   // GET PRODUCT BY ID
   getProductById(id): any{
    return this.http.get(this.URL_LO + 'all/product/id/' + id);
    }

  getProductByCategory(cat): any{
    return this.http.get(this.URL_LO + 'all/product/category/' + cat);
  }

  // GET IMAGE PRODUCT

  getImage(name): any{
    return this.http.get(this.URL_LO + 'images/products/' + '33.png');
  }

  // DELETE PRODUCT
  deleteProduct(id): any{
    return this.http.get(this.URL_LO + 'config/product/delete/' + id);
  }


  // UPDATE PRODUCT


  // SAVE PRODUCT
  saveProduct(file): any{
    return this.http.post(this.URL_LO + 'config/product/save', file);
  }




  // GET CATEGORY
  getCategories(): any{
    return this.http.get(this.URL_LO + 'config/category/all');
  }

}
