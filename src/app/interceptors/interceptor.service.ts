import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class InterceptorService implements HttpInterceptor {


    constructor(protected authService: AuthService,
                protected router: Router) {}

    intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {

      const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

        let token = this.authService.token;

        if ( token != null ) {
          console.warn('Interceptor Con Login')
          var headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Authorization': 'Bearer '+ token
          });
        } else {
          console.warn('Interceptor Sin Login')
          const credentialsApp = btoa(environment.credentialsAppUser + ':' + environment.credentialsAppPassword);

          var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*',
            'Authorization': 'Basic ' + credentialsApp
            });
        }

        const reqClone = req.clone({ headers });


        return next.handle( reqClone ).pipe(
          catchError( this.Errors)
        );

    }


    Errors( error: HttpErrorResponse ) {
      console.log('Ocurrio un error');
      this.logout
      return throwError(error);
    }

    logout():void {
      this.authService.logout();
      this.router.navigate['/auth/sign-in'];
    }

}
