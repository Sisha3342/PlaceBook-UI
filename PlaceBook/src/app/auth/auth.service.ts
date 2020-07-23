import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  async login(email: string, password: string): Promise<User> {
    const user: User = await fetch(
      'POST',
      'https://placebookapp.herokuapp.com/login'
    );

    // localStorage.setItem('user', JSON.stringify(user));

    //email + password ------> server

    //user object <----------- server

    // this.cookieService.set('userId', 'user.id');
    // this.cookieService.set('role', 'user.role');
    return user;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
    // this.cookieService.deleteAll();
  }

  getCurrentUser(): User {
    const user = localStorage.getItem('user');

    return JSON.parse(user);
  }
}
