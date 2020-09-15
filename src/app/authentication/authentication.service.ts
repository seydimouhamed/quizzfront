import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
 
  infoUser:User;
  private apiUrl='api';

  private helper = new JwtHelperService();
  
  constructor(
    private http:HttpClient,
    private userService:UserService
    ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  httpOptions = {
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
 
  public get currentUserValue():User
  {
    return this.currentUserSubject.value;
  }

  login(username:string,password:string)
  {
    return this.http.post<any>(`http://127.0.0.1:8000/api/login`,{username,password})
                .pipe(map(user => {
                    localStorage.setItem('currentUser',JSON.stringify(user));
                     let tokenInfo=this.getInfoToken(user['token']);
                    localStorage.setItem('currentUserInfo',JSON.stringify(tokenInfo));
                    this.currentUserSubject.next(user);
                    return tokenInfo.roles[0];
                })
                );
  }

  logout()
  {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserInfo');
    this.currentUserSubject.next(null);
  }

  getInfoToken(token:string):any
  {
    try
    {
      return this.helper.decodeToken(token);
    }
    catch(Error)
    {
      return null;
    }
  }

}
