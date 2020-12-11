import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PluginsService} from '../../../plugins.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class ListComponent implements OnInit {

  users; 
  roles; 
  constructor(private http: HttpClient, private router: Router, private authservice: AuthService, private plugins: PluginsService) { }

  ngOnInit(): void {

    // Init all plugins...
    const current = this;

    setTimeout(() => {
      current.plugins.index();
      current.plugins.dashboardIndex();
    }, 200);

    if (!this.isAuthenticated()) {
      this.router.navigate(['/auth/sign-in']);
    }
    
    const headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('token')}`});


    this.http.get( environment.apiEndpoint + 'users', {headers: headers}).subscribe(
      result => this.users = result
    );


    this.http.get( environment.apiEndpoint + 'role', {headers: headers}).subscribe(
      result => this.roles = result
    );

  }


  isAuthenticated() {
    if (sessionStorage.getItem('token') === undefined) {
      return false;
    } else {
      return true;
    }
  }

}
