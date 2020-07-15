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
    const regex = new RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    return regex.test(login) && password ? true : false;
  }

  loginUser(form: NgForm): void {
    if (!this.isLoginPasswordValid(this.login, this.password)) {
      this.snackbar.open(this.warnMessage, 'Close', {
        verticalPosition: 'top',
        panelClass: ['snack-white'],
      });
      return;
    } else {
      localStorage.setItem('login', this.login);
      localStorage.setItem('password', this.password);
    }
  }
}
