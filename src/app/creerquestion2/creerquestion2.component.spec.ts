import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Creerquestion2Component } from './creerquestion2.component';

describe('Creerquestion2Component', () => {
  let component: Creerquestion2Component;
  let fixture: ComponentFixture<Creerquestion2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Creerquestion2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Creerquestion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
