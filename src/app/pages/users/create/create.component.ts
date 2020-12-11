import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';
import {PluginsService} from '../../../plugins.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: []
})
export class CreateComponent implements OnInit {

  roles; 

  form= new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });
  
  constructor(private http: HttpClient,
    private router: Router,
    private plugins: PluginsService,
    private fb: FormBuilder,
    private authservice: AuthService) { }


  ngOnInit(): void {

    // Init all plugins...
    const current = this;

    setTimeout(() => {
      current.plugins.index();
      current.plugins.dashboardIndex();
    }, 200);

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });


    if (!this.isAuthenticated()) {
      this.router.navigate(['/auth/sign-in']);
    }


    const headers = new HttpHeaders({'Authorization': `Bearer ${localStorage.getItem('token')}`});

    
    this.http.get( environment.apiEndpoint + 'role', {headers: headers}).subscribe(
      result => this.roles = result
    );
  }



  submit(): void {
    const formData = this.form.getRawValue();

    console.log(formData)

    
    this.authservice.registerUser(formData).subscribe(response => {

      console.log(response)   
      localStorage.setItem('user', formData.email );
      localStorage.setItem('token', response.access_token );  
      this.router.navigate(["/users"]);
    }, err => {
      console.error(err)
      if(err.status === 200) {
        this.router.navigate(["/users"]);
      }
    });

    
  }




  isAuthenticated() {
    if (sessionStorage.getItem('token') === undefined) {
      return false;
    } else {
      return true;
    }
  }

}
