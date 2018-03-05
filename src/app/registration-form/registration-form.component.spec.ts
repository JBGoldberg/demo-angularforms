import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormComponent } from './registration-form.component';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
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

    let errors = {};
    let field = component.form.controls['firstName'];
    expect(field.valid).toBeFalsy();

    // field is required
    errors = field.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set field to something
    field.setValue("Robert");
    errors = field.errors || {};
    expect(errors['required']).toBeFalsy();

  });

  it('should validate a required LAST NAME', () => {

    let errors = {};
    let field = component.form.controls['lastName'];
    expect(field.valid).toBeFalsy();

    // field is required
    errors = field.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set field to something
    field.setValue("Downey");
    errors = field.errors || {};
    expect(errors['required']).toBeFalsy();

  });

  it('should validate a required USERNAME', () => {
    let errors = {};
    let field = component.form.controls['username'];
    expect(field.valid).toBeFalsy();

    // field is required
    errors = field.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set field to something
    field.setValue("ironman");
    errors = field.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('should validate a required and valid EMAIL', () => {
    let errors = {};
    let field = component.form.controls['email'];
    expect(field.valid).toBeFalsy();

    // field is required
    errors = field.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something wrong
    field.setValue("My Email");
    errors = field.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();

    // Set email to something correct
    field.setValue("ironman@avengers.com");
    errors = field.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeFalsy();
  });

  it('should validate a required PASSWORD with mininum lenght', () => {
    let errors = {};
    let field = component.form.controls['password'];
    expect(field.valid).toBeFalsy();

    // field is required
    errors = field.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set password to something wrong
    field.setValue("12");
    errors = field.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set password to something correct
    field.setValue("smnd5sdjmdu");
    errors = field.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });

});
