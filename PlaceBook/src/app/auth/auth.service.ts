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

  async login(name: string, password: string): Promise<User> {
    const user: User = await this.http
      .post<User>('https://placebookapp.herokuapp.com/login', {
        name,
        password,
      })
      .toPromise();

    localStorage.setItem('user', JSON.stringify(user));

    return user;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getCurrentUser(): User {
    const user = localStorage.getItem('user');

    return JSON.parse(user);
  }
}
