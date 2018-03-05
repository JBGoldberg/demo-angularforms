import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { RegistrationFormComponent } from './registration-form.component';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [RegistrationFormComponent]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate a required FIRST NAME', () => {
    fixture.detectChanges();

    let input = debugElement.query(By.css('#firstNameField'));
    let inputElement = input.nativeElement;

    inputElement.value = "Teste";
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    console.log(component.form.controls['firstName'])

    // expect(component.form.valid).toBeFalsy();


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
