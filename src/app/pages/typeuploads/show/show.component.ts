import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PluginsService} from '../../../plugins.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: []
})
export class ShowComponent implements OnInit {

  typeuploads; 
  roles; 
  constructor(private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private authservice: AuthService,
    private plugins: PluginsService) { }

  ngOnInit(): void {

    let id = this.activatedRoute.snapshot.params.id;
    console.log(id);// OUTPUT 1534

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


    this.http.get( `${environment.apiEndpoint}typeuploads/${id}` , {headers: headers}).subscribe(
      result => this.typeuploads = result
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
