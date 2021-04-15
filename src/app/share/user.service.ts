import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { stringify } from '@angular/compiler/src/util';
import {JwtResponse} from '../models/JwtResponse.model';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_L = environment.URL_LOCAL;

  constructor(private http: HttpClient) { }


  login(form): any{
      return this.http.post(this.URL_L + 'auth/signin', form)
      .pipe(
        map((user: JwtResponse) => {
        localStorage.setItem('role', user.authorities[0].authority);
        localStorage.setItem('token', user.token);
        return user;
        },
        ),
      );
  }


  logout(): any{
    localStorage.removeItem('role');
    localStorage.removeItem('token');
  }







}
