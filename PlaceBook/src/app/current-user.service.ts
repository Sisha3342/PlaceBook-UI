import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  constructor() {}

  async login(email: string, password: string): Promise<boolean> {
    const user: User = {
      name: 'Anton',
      email,
      password,
      role: 'user',
    };

    localStorage.setItem('user', JSON.stringify(user));

    return true;
  }

  logout(): void {
    localStorage.clear();
  }

  getCurrentUser(): User {
    const user = localStorage.getItem('user');

    return JSON.parse(user);
  }

  isAuthorized(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
