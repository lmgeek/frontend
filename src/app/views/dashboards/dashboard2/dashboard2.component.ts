import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { NgwWowService } from 'ngx-wow';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styles: []
})
export class Dashboard2Component implements OnInit {
  constructor(private wowService: NgwWowService, private http: HttpClient, private authservice: AuthService,) {
    this.wowService.init();
  }
  data = [];
  user;

  optionsData: AnimationOptions = {
    path: '/assets/images/small/data1.json'
  };
  

  ngOnInit() {

    const headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('token')}`});
    this.getMyData(headers);
    
  }

  getMyData(headers) {
    this.http.get( environment.apiEndpoint + 'mydata/' + localStorage.getItem('user'), {headers: headers}).subscribe(
      result => {
        this.user = result[0];
      }
    )
  }
  


}
