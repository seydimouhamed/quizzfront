import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators'; 
import { AuthenticationService } from './authentication.service';
import { stringify } from '@angular/compiler/src/util';
import { User } from '../models/user';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {


  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl:string;
  error ='';
  dtee:User;

  constructor(private formBuilder: FormBuilder,
              private route:ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService ) {
                if(this.authenticationService.currentUserValue){
                  this.router.navigate(['/']);
                }
               }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
        username:['', Validators.required],
        password:['',Validators.required]
    });

    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  get f(){ return this.loginForm.controls;}

  onSubmit(){
    this.submitted=true;
 
    if(this.loginForm.invalid){
      return;
    }

    this.loading=true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          data => {
            //console.log(data);
            if(data==="ROLE_ADMIN")
            {
              console.log("role admin"+this.returnUrl);
             // this.returnUrl=
            }
            else if(data==="ROLE_PLAYER")
            {
              console.log('role player');
            }
            this.router.navigate([this.returnUrl]);
          },
          error => {
            this.error = error;
            this.loading = false;
          }
        );
  }


}
