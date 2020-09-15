import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:User=
{
  username:'',
  password :'',
  firstname:'',
  lastname:''
};
registerForm: FormGroup;
error ='';
submitted=false;
avatar=null;
  constructor(
    private http:HttpClient,
    private formBuilder: FormBuilder,
    private userService:UserService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
        firstname:['',Validators.required],
        lastname:['', Validators.required],
        username:['', Validators.required],
        password:['',Validators.required],

        avatar:['']
    });

  }

  onFileSelect(event)
  {
    if(event.target.files.length >0)
    {
     // alert('une image a été electionné');
       const file = (event.target as HTMLInputElement).files[0];

        this.registerForm.patchValue({avatar: file });
        this.registerForm.get('avatar').updateValueAndValidity();
       //this.registerForm.get('avatar').setValue(file);
       //this.avatar=file;
    }
  }

  get f(){ return this.registerForm.controls};

  persistUser()
  {
    this.userService.addUser(this.user)
        .subscribe( (user)=>
          {
            this.resetUser();
            alert('ajouter avec succes');
          }
          
        )
  }
  onSubmit()
  {
    const registerValue=this.registerForm.value;
    let attrs=['username','firstname','lastname','avatar','password'];
    const registerFormData=new FormData();

     for(let att of attrs)
     {
       console.log(this.registerForm.get(att).value);
       registerFormData.append(att, this.registerForm.get(att).value);
     }
  
  this.userService.addUser(registerFormData)
      .subscribe( 
        (user)=> {
          this.registerForm.reset();
          this.router.navigate(["/login"]);
        },
        (err)=>{
          alert('erreur survenue');
        }     
   )
  }

  resetUser()
  {
    this.user=
    {
      username:'',
      password :'',
      firstname:'',
      lastname:''
    }
  }

}
