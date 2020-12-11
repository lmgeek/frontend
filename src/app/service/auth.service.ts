import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const AUTH_API = environment.apiEndpoint + 'oauth/token';

// const credentialsApp = btoa(environment.credentialsAppUser + ':' + environment.credentialsAppPwd);

const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  
  private _user: User;
  private _token: string;

  constructor(private http: HttpClient, private router: Router) {  }

  public get user(): User{
    if (this._user != null) {
      return this._user;
    } else if (this._user == null && sessionStorage.getItem('user') != null) {
      this._user = JSON.parse(sessionStorage.getItem('user')) as User;
      return this._user;
    }
    return new User();
  }
  public get token(): string{
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  login(user:User): Observable<any> {

    const data = {
      username: user.email,
      password: user.password,
      grant_type: 'password',
      client_id: environment.credentialsAppUser,
      client_secret: environment.credentialsAppPassword
    
    }

    return this.http.post(AUTH_API, data);
  }

//Users
  registerUser(addUser): Observable<any> {

    const data = {
      name: addUser.name,
      email: addUser.email,
      password: addUser.password    
    }

    return this.http.post(environment.apiEndpoint + 'users/create', data);
  }

  updateUser(addUser): Observable<any> {

    const data = {
      name: addUser.name,
      email: addUser.email,
      role: addUser.role,
      password: addUser.password    
    }

    return this.http.patch(`${environment.apiEndpoint}users/${addUser.id}`, data);
  }



//TypeUpload
registerTypeUpload(addTypeUpload): Observable<any> {

  const data = {
    name: addTypeUpload.name,
    description: addTypeUpload.description,
    min_upload: addTypeUpload.min_upload
  }

  return this.http.post(environment.apiEndpoint + 'type_uploads/create', data);
}

  updateTypeupload(addTypeUpload): Observable<any> {

    const data = {
      name: addTypeUpload.name,
      description: addTypeUpload.description,
      min_upload: addTypeUpload.min_upload
    }


    return this.http.patch(environment.apiEndpoint + 'type_uploads/' + addTypeUpload.id, data);
  }


  //TypeUpload
registerOrder(addOrder): Observable<any> {

  const data = {
    companyName: addOrder.companyName,
    referenceName: addOrder.referenceName,
    projectName: addOrder.projectName,
    address: addOrder.address,
    zipcode: addOrder.zipcode,
    city: addOrder.city,
    province: addOrder.province,
    country: addOrder.country,
    checklist: addOrder.checklist,
    comments: addOrder.comments,
    contributor: addOrder.contributor
  }

  return this.http.post(environment.apiEndpoint + 'order/create', data);
}

  updateOrder(addOrder): Observable<any> {

    const data = {
      companyName: addOrder.companyName,
      referenceName: addOrder.referenceName,
      projectName: addOrder.projectName,
      address: addOrder.address,
      zipcode: addOrder.zipcode,
      city: addOrder.city,
      province: addOrder.province,
      country: addOrder.country,
      checklist: addOrder.checklist,
      comments: addOrder.comments,
      contributor: addOrder.contributor
    }


    return this.http.patch(environment.apiEndpoint + 'order/' + addOrder.id, data);
  }



  logout():void {
    this._token = null;
    this._user = null;
    sessionStorage.clear();
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.router.navigate(['/auth/sign-in']);
  }

  saveUser(email: string):void {
    this._user = new User();
    this._user.email = email;

    sessionStorage.setItem('user', JSON.stringify(this._user));
  }


  saveToken(accessToken: string):void {
    this._token = accessToken;
    console.log(this._token)
    sessionStorage.setItem('token', accessToken);
  }

  getTokenData(accessToken: string):any {
    let rtn = (accessToken != null) ? JSON.parse(atob(accessToken.split(".")[1])) : null;
    return rtn
  }

  isAuthenticated(): boolean {
    let payload = this.getTokenData(this.token);
    let rtn = (payload != null && payload.user_name && payload.user_name.length > 0) ? true : false;
    return rtn

  }

  headerToken() {
    let header = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('token')}`});
    return header;
  }

}