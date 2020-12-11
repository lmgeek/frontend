import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PluginsService } from 'src/app/plugins.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: []
})
export class UpdateComponent implements OnInit {

  
  typeupload;  

  form= new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    min_upload: new FormControl()
  });

  constructor(private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
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


    this.http.get( `${environment.apiEndpoint}type_uploads/${id}` , {headers: headers}).subscribe(
      result => {
        // console.log(result)
        this.typeupload = result
      }
    );



  }


  isAuthenticated() {
    if (sessionStorage.getItem('token') === undefined) {
      return false;
    } else {
      return true;
    }
  }


  submit(): void {
    const formData = this.form.getRawValue();
    formData.id = this.activatedRoute.snapshot.params.id;

    console.log(formData)

    
    this.authservice.updateTypeupload(formData).subscribe(response => {

      console.log(response)   
      this.router.navigate(["/typeupload"]);
    }, err => {
      console.error(err)
      if(err.status === 200) {
        this.router.navigate(["/typeupload"]);
      }
    });

    
  }

}
