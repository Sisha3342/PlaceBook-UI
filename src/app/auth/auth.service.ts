import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BASE_API_URL } from '../globals';

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

  login(name: string, password: string): Observable<User> {
    const formData = new FormData();
    formData.append('email', name);
    formData.append('password', password);

    return this.http.post<User>(`${BASE_API_URL}/login`, formData);
  }

  logout(): Observable<any> {
    this.cookieService.deleteAll();
    localStorage.removeItem('user');
    return from(this.router.navigate(['/login']));
  }

  getCurrentUser(): User {
    const user = localStorage.getItem('user');

    return JSON.parse(user);
  }
}
