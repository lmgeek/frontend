import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PluginsService } from 'src/app/plugins.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class ListComponent implements OnInit {

  orders; 
  mydata; 
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

    this.getMyData(headers);

    this.http.get( environment.apiEndpoint + 'order/getmyorders/'+ localStorage.getItem('id') , {headers: headers}).subscribe(
      result => {
        console.log(result)
        this.orders = result
      }
    );



    


  }

  getMyData(headers) {
    this.http.get( environment.apiEndpoint + 'mydata/' + localStorage.getItem('user'), {headers: headers}).subscribe(
      result => {
        localStorage.setItem('id', result[0].id)
      }
    )
  }

  getMyOrders(id, headers) {
    
  }


  isAuthenticated() {
    if (sessionStorage.getItem('token') === undefined) {
      return false;
    } else {
      return true;
    }
  }

}