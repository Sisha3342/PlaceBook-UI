import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '.././models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = '';
  password = '';

  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private userService: AuthService
  ) {}

  ngOnInit(): void {}

  loginUser(): void {
    this.snackbar.dismiss();
    this.userService.login(this.login, this.password).subscribe(
      (data: User) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/my_bookings']);
      },
      (error) => {
        this.snackbar.open(
          'The username and password you entered did not match our records. Please double-check and try again.',
          'Close',
          {
            verticalPosition: 'top',
          }
        );
      }
    );
  }
}
