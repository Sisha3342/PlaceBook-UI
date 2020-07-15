import { MatSnackBar } from '@angular/material/snack-bar';
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
  warnMessage = 'Invalid credentials';

  constructor(private snackbar: MatSnackBar) {}

  ngOnInit(): void {}

  isLoginPasswordValid(login: string, password: string): boolean {
    return !login || !password ? false : true;
  }

  loginUser(form: NgForm): void {
    if (!this.isLoginPasswordValid(this.login, this.password)) {
      this.snackbar.open(this.warnMessage);
      return;
    } else {
      localStorage.setItem('login', this.login);
      localStorage.setItem('password', this.password);
    }
  }
}
