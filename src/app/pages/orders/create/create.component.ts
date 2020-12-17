import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PluginsService } from 'src/app/plugins.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: []
})
export class CreateComponent implements OnInit {

  order;  
  images = [];
  user;

  form= new FormGroup({
    companyName: new FormControl(),
    referenceName: new FormControl(),
    projectName: new FormControl(),
    address: new FormControl(),
    zipcode: new FormControl(),
    city: new FormControl(),
    province: new FormControl(),
    country: new FormControl(),
    checklist: new FormControl(),
    comments : new FormControl(),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  filedata:any;
  fileEvent(e){
    this.filedata = e.target.files[0];
  }

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
    formData.contributor = localStorage.getItem('user');

    console.log(formData)

    
    this.authservice.registerOrder(formData).subscribe(response => {

      console.log(response)   
      this.router.navigate(["/orders"]);
    }, err => {
      console.error(err)
      if(err.status === 200) {
        this.router.navigate(["/orders"]);
      }
    });

    
  }


  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
   
                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.images.push(event.target.result); 
   
                   this.form.patchValue({
                      fileSource: this.images
                   });
                }
  
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }
  

}
