import { Component, OnInit } from '@angular/core';
import { Question } from '../question.interface';
import { QuestionService } from '../services/question.service';
@Component({
  selector: 'app-listquestion',
  templateUrl: './listquestion.component.html',
  styleUrls: ['./listquestion.component.css']
})
export class ListquestionComponent implements OnInit {

  question:Question[]=[];
  constructor(private _question:QuestionService) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions()
  {
     let info=JSON.parse(localStorage.getItem('currentUserInfo'));
     

     this._question.getAll()
              .subscribe(
                res=>{
                    this.question=res;
                }
              );
  }
}
