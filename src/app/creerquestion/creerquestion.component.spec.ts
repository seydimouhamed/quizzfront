import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerquestionComponent } from './creerquestion.component';

describe('CreerquestionComponent', () => {
  let component: CreerquestionComponent;
  let fixture: ComponentFixture<CreerquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
