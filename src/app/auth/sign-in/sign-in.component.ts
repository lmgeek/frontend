import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { User } from 'src/app/models/user';
import { PluginsService } from 'src/app/plugins.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent implements OnInit {


  form= new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  user:User;
  errMsg = [];
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
    
    const current = this;

    setTimeout(() => current.plugins.index(), 200);

  }


  submit(): void {
    const formData = this.form.getRawValue();

    this.user.email = formData.email;
    this.user.password = formData.password;

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




    this.authservice.login(this.user).subscribe(response => {

      console.log(response)   
      localStorage.setItem('user', formData.email );
      localStorage.setItem('token', response.access_token );  
      this.router.navigate(["/home"]);
    }, err => {
      if (err.status == 400) {
        let msg = 'Usuario o Contraseña incorrecta, verifique e intente nuevamente'
        err => {
          console.log(err)
          this.errMsg = err
        }
        
      }
      console.error(err)
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
