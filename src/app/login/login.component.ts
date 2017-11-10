import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  formData: {email: string, password: string} = {
    email: null,
    password: null
  };
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(this.formData.email, [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl(this.formData.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z]\d$@$!%*#?&]{8,}$/)
      ])
    });
  }
  onSubmit() {
  }

}
