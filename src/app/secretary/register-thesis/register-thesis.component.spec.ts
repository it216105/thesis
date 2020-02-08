import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterThesisComponent } from './register-thesis.component';

describe('RegisterThesisComponent', () => {
  let component: RegisterThesisComponent;
  let fixture: ComponentFixture<RegisterThesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterThesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
