import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Customer} from "../customer.interface";


@Component({
  selector: 'app-creerquestion2',
  templateUrl: './creerquestion2.component.html',
  styleUrls: ['./creerquestion2.component.css']
})
export class Creerquestion2Component implements OnInit {

  public myForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this._fb.group({
      name:['', [Validators.required,Validators.minLength(5)]],
      addresses:this._fb.array([this.initAddress(),])
    });
  }

  initAddress()
  {
    return this._fb.group({
      street:['',Validators.required],
      postcode:['']
    });
  }

  addAddress()
  {
    const control= <FormArray>this.myForm.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number)
  {
    const control = <FormArray>this.myForm.controls['addresses'];
    control.removeAt(i);
  }
  save()
  {
    
  }

}
