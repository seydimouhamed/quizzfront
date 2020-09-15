import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  getAll()
  {
    return this.http.get<User[]>(`http://127.0.0.1:8000/api/users`);
  }

  getUserByUsername(un:string):Observable<User>
  {
    let use=this.http.get<User>(`http://127.0.0.1:8000/api/users/${un}`);
    return use;
  }

  
  addUser(data)
  {
    return this.http.post<any>(`http://127.0.0.1:8000/api/register`,data);
  }

}
