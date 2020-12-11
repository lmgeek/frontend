import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private BASE_PATH = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  // Add options on Http Request
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Handle error on Http Request
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Status : ${error.status}, ` +
        `Response : ${error.error}`);
    }
    return throwError(
      'Something want wrong. please try again later.');
  }


  getOrders() {
    return this.http.get(`${this.BASE_PATH}orders`)
  }
  

}
