import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { PluginsService } from 'src/app/plugins.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit {

  form= new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });
  
  user:User;

  constructor(private authservice: AuthService,
    private plugins: PluginsService,
     private fb: FormBuilder, 
     private http: HttpClient,
    private router: Router) { 
      this.user = new User();
    }

  ngOnInit() {

    // if (this.isAuthenticated()) {
    //   this.router.navigate(['/home']);
    // }

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });


  }



  submit(): void {
    const formData = this.form.getRawValue();

console.log(formData)

    // const data = {
    //   username: formData.email,
    //   password: formData.password,
      // grant_type: 'password',
      // client_id: environment.credentialsAppUser,
      // client_secret: environment.credentialsAppPassword

    // }

    // this.http.post(environment.apiEndpoint + 'oauth/token', data).subscribe(
    //   (result: any) => {
    //     console.log('success')
    //     console.log(result)
    //     localStorage.setItem('token', result.access_token );
    //     this.router.navigate(["/home"]);
    //   },
    //   error => {
    //     console.error('error')
    //     console.log(error)
    //   }
    // );




    this.authservice.registerUser(formData).subscribe(response => {

      console.log(response)   
      localStorage.setItem('user', formData.email );
      localStorage.setItem('token', response.access_token );  
      this.router.navigate(["/auth/sign-in"]);
    }, err => {
      console.error(err)
      if(err.status === 200) {
        this.router.navigate(["/auth/sign-in"]);
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
