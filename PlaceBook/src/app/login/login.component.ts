import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  login = '';
  password = '';

  constructor() {}

  ngOnInit(): void {
   }

  loginUser(form: NgForm): void {
    if (form.invalid) {
      return;
    } else {
      localStorage.setItem('login', this.login);
      localStorage.setItem('password', this.password);
    }
  }
}
