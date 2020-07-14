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

  loginUser(event: any): void {
    event.preventDefault();
    if (event.target.classList.contains('ng-invalid')) {
      return;
    } else {
      localStorage.setItem('login', this.login);
      localStorage.setItem('password', this.password);
    }
  }
}
