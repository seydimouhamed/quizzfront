import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'address',
  templateUrl: './adresse.component.html'
})
export class AdresseComponent  {

  @Input('group') 
  public adressForm: FormGroup;
  constructor() { }

}
