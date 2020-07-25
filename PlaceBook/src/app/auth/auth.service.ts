import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  login(name: string, password: string): Observable<User> {
    const formData = new FormData();
    formData.append('email', name);
    formData.append('password', password);

    return this.http.post<User>(
      'https://placebookapp.herokuapp.com/login',
      formData
    );
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  getCurrentUser(): User {
    const user = localStorage.getItem('user');

    return JSON.parse(user);
  }
}
