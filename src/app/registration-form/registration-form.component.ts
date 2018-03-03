import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../models/user.model';

@Component({
  selector: 'gdg-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  form: FormGroup;

  showPassword: boolean = false;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      termsAcceptance: new FormControl('', Validators.required)
    })
  }

  toggleShowPassword($event) {
    this.showPassword = $event.target.checked
  }

  registerUser() {
    console.log(this.form.value)

    let _user = new User();
    _user.firstName = this.form.value.firstName
    _user.lastName = this.form.value.lastName
    _user.username = this.form.value.username
    _user.email = this.form.value.email
    _user.password = this.form.value.password
    if (this.form.value.termsAcceptance)
      _user.termsAcceptanceDate = new Date()

    console.log(_user)
  }

}
