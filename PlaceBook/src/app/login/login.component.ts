import { CurrentUserService } from './../current-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = '';
  password = '';
  warnMessage = 'Invalid credentials';

  service: CurrentUserService;

  constructor(private snackbar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {}

  isLoginPasswordValid(login: string, password: string): boolean {
    const regex = new RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    return !!(regex.test(login) && password);
  }

  async loginUser(form: NgForm): Promise<void> {
    if (!this.isLoginPasswordValid(this.login, this.password)) {
      this.snackbar.open(this.warnMessage, 'Close', {
        verticalPosition: 'top',
        panelClass: ['snack-white'],
      });

      return;
    } else {
      // const result = await this.service.login(this.login, this.password);
      // console.log(result);
      this.snackbar.dismiss();
      localStorage.setItem('login', this.login);
      localStorage.setItem('password', this.password);
      this.router.navigate(['my_bookings']);
    }
  }
}
