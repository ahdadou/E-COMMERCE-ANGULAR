import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

   constructor(private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        if (localStorage.getItem('token') != null ){
           const reqClone = req.clone({
               headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
           });
           return next.handle(reqClone).pipe(tap (
                        (succ) => {},
                        (err) => {
                            // localStorage.removeItem('token');
                            // localStorage.removeItem('role');
                            // this.router.navigateByUrl('admin/login');
                                               }       )
             );
        }else{
            return next.handle(req.clone());
        }
    }

}
