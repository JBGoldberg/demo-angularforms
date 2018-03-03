import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormComponent } from './registration-form.component';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should validate a required FIRST NAME', () => {
    // expect(component).toBeTruthy();
  });

  xit('should validate a required LAST NAME', () => {
    // expect(component).toBeTruthy();
  });

  xit('should validate a required USERNAME', () => {
    // expect(component).toBeTruthy();
  });

  xit('should validate a required and valid EMAIL', () => {
    // expect(component).toBeTruthy();
  });

  xit('should validate a required PASSWORD', () => {
    // expect(component).toBeTruthy();
  });

  xit('should validate a required TERMS acceptance', () => {
    // expect(component).toBeTruthy();
  });
});
