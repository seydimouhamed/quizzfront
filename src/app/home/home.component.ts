import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import {  UserService } from '../services/user.service';
import {AuthenticationService } from '../authentication/authentication.service';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loading = false;
  users: User[];
  user:User=
  {
    firstname:'',
    lastname:'',
    username:''
  };
  imgMim=null;

  currentUser : User;
  constructor(
    private sanitizer:DomSanitizer,
    private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x); }

  logout()
  {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit()
  {
       this.loading=true;
       this.userService.getAll().pipe(first())
            .subscribe(
              res => {
                  this.users = res;
                  this.loading = false;
              }
            );
            this.getUserInfo();
            
  }

  getUserInfo()
  {
     let info=JSON.parse(localStorage.getItem('currentUserInfo'));
     

     this.userService.getUserByUsername(info.username)
              .subscribe(
                res=>{
                    this.user=res;
                   // alert(this.user.avatar)
                    if(this.user.avatar)
                    {
                      this.imgMim=this.user.avatar;
                    }
                }
              );
  }
  guetImageMime(data){

    if(data.charAt(0)=='/'){
      return "image/jpeg";
    }else if(data.charAt(0)=='R'){
      return "image/gif";
    }else if(data.charAt(0)=='i'){
      return "image/png";
    }else{
      return null;
    }
  }

  getImageFromB64(imgb64)
  {
      let img=document.createElement('img');

      img.width=100;
      img.height=100;
      img.src = "data:image/png;base64"+imgb64;
  }
//   transform(){
//     let imageB64=this.imgMim;
//     if(imageB64){
//     let image="data:"+this.guetImageMime(this.img2)+";base64,"+this.img2;
//     return this.sanitizer.bypassSecurityTrustResourceUrl(image);
//     }
//     else {
//       return null;
//     }

// }
getImg(){
  let imageB64=this.imgMim;
  if(imageB64!==null){
  let image="data:"+this.guetImageMime(imageB64)+";base64,"+imageB64;
  return this.sanitizer.bypassSecurityTrustResourceUrl(image);
  }
  else {
    return null;
  }

}
}
