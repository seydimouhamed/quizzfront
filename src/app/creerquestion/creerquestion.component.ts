import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { report } from 'process';
import { from } from 'rxjs';
import { Question } from '../question.interface';

@Component({
  moduleId:module.id,
  selector: 'app-creerquestion',
  templateUrl: './creerquestion.component.html',
  styleUrls: ['./creerquestion.component.css']
})
export class CreerquestionComponent implements OnInit {

  public formQuestion:FormGroup;
  questions:Question[]=[];
  constructor(private _fb:FormBuilder) { };
  typeRep="";

  ngOnInit(): void {

    this.formQuestion = this._fb.group({
      libelle:['', [Validators.required]],
      score:['',[Validators.required]],
      type:['',[Validators.required]],
      reponses:this._fb.array([])
    });
  }

  onChangeType()
  {
    let typ=this.formQuestion.value['type'];
    const control= <FormArray>this.formQuestion.controls['reponses'];
    this.removeAllReponse(control);
    if(typ==='cs')
    {
      this.typeRep="radio";
       control.push(this.initReponse());
      control.push(this.initReponse());

    }else if(typ==="cm")
    {
      this.typeRep="checkbox";
      control.push(this.initReponse());
      control.push(this.initReponse());
    }
    else if(typ==="ct")
    {
      this.typeRep=null;
      control.push(this.initReponse());

    }
    
  }

  onSelect(j:number)
  {
    const control=<FormArray>this.formQuestion.controls['reponses'];
    let typ=this.formQuestion.value['type'];
    if(typ=="cs")
    {
        for (let i = 0; i < control.value.length; i++) {
          j==i? control.value[i]['isCorrect']=true:control.value[i]['isCorrect']=false;
          
        }
    }else
    {
      control.value[j]['isCorrect']=!control.value[j]['isCorrect'];
    }
  }

   initReponse()
   {
    const control=<FormArray>this.formQuestion.controls['reponses'];
 
     return this._fb.group({
        libeller:['',Validators.required],
        isCorrect:[false]
     });
   }

   addReponse()
   {
     
    const control= <FormArray>this.formQuestion.controls['reponses'];
    control.push(this.initReponse());
    
   }

   removeReponse(i:number)
   {
    
    const control= <FormArray>this.formQuestion.controls['reponses'];
    control.removeAt(i);
   }

   removeAllReponse(form:FormArray)
   {
      while(form.length !== 0)
      {
        form.removeAt(0);
      }
     
   }
}
