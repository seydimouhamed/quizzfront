import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../question.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }


  getAll()
  {
    return this.http.get<Question[]>(`http://127.0.0.1:8000/api/questions`);
  }
}
