import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListjoueurComponent } from './listjoueur.component';

describe('ListjoueurComponent', () => {
  let component: ListjoueurComponent;
  let fixture: ComponentFixture<ListjoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListjoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListjoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
