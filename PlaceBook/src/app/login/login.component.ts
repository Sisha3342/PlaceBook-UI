import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = '';
  password = '';
  warnMessage = 'Invalid credentials';

  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private userService: AuthService
  ) {}

  ngOnInit(): void {}

  isLoginPasswordValid(login: string, password: string): boolean {
    const regex = new RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    return !!(regex.test(login) && password);
  }

  loginUser(): void {
    if (!this.isLoginPasswordValid(this.login, this.password)) {
      this.snackbar.open(this.warnMessage, 'Close', {
        verticalPosition: 'top',
      });

      return;
    } else {
      this.snackbar.dismiss();
      this.userService.login(this.login, this.password);
      this.router.navigate(['my_bookings']);
    }
  }
}
