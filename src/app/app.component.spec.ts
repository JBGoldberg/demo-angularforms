import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'

import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegistrationFormComponent,
        AppComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
