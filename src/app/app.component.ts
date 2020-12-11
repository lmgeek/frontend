import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {PluginsService} from './plugins.service';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  
  constructor(private plugins: PluginsService, private router: Router,
    private apiService: ApiService) { }
    
    
    title = 'galleryFront';
    
    users = [];
    
    loggedIn = false;
    
    
    ngOnInit() {
      
      this.loggedIn = localStorage.getItem('token') !== null;
      
      this.apiService.getOrders().subscribe((data: any) => {
        this.users = data.data;
        // console.log(data.data)
      });
      
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0);
      });
    }


    logout(){
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
    
  }
  