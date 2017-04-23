import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../services/mock'
import { AuthenticationService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
    
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: [ 'login.component.css' ]
})

export class LoginComponent implements OnInit {
   
    loading = false;
    model = new User( '','');
      myForm: FormGroup;
     submitted = false;
  onSubmit() { this.submitted = true; }
  active = true;

    constructor( private router: Router,private fb: FormBuilder, private authenticationService: AuthenticationService) { }

    ngOnInit() {
       




        this.authenticationService.logout();

        this.myForm = this.fb.group({
           
           
            username: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            password: ['']

             
        });

    }

    login() {
        this.loading = true;
      this.model = this.myForm.value;
      console.log('model',this.model);
        this.authenticationService.login(this.model)
            .subscribe(data => { 
                    
                     this.router.navigate(['dashboard']);
                      this.router.navigate(['/']);
                  
                     window.location.reload();
                },
                
                error => {
                    
                    this.loading = false;
                });

             
    }
}