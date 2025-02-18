import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login = '';
  password = '';

  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private userService: AuthService,
    private spinner: NgxSpinnerService
  ) {}

  loginUser(): void {
    this.spinner.show('loginSpinner');
    this.snackbar.dismiss();
    this.userService.login(this.login, this.password).subscribe(
      (data: User) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/my_bookings']);
        this.spinner.hide('loginSpinner');
      },
      (error) => {
        this.snackbar.open(
          'The username and password you entered did not match our records. Please double-check and try again.',
          'Close',
          {
            verticalPosition: 'top',
          }
        );
        this.spinner.hide('loginSpinner');
      }
    );
  }
}
