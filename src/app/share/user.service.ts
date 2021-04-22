import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { stringify } from '@angular/compiler/src/util';
import {JwtResponse} from '../models/JwtResponse.model';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  islogin$ = new BehaviorSubject<boolean>(false);
  URL_L = environment.URL_LOCAL;

  constructor(private http: HttpClient) { 
    if(localStorage.getItem('role') != null && localStorage.getItem('token') != null)
    this.islogin$.next(true);
  }


  login(form): Observable<any>{
      return this.http.post(this.URL_L + 'auth/signin', form)
      .pipe(
        map((user: JwtResponse) => {
        this.islogin$.next(true);
        localStorage.setItem('role', user.authorities[0].authority);
        localStorage.setItem('token', user.token);
        return user;
        },
        ),
      );
  }


  logout(): any{
    this.islogin$.next(false);
    localStorage.removeItem('role');
    localStorage.removeItem('token');
  }







}
