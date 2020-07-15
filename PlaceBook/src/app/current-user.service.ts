import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private user: User;

  constructor() {}

  setCurrentUser(): void {
    this.user.name = localStorage.getItem('name');
    this.user.password = localStorage.getItem('password');
    this.user.email = localStorage.getItem('email');
    this.user.role = localStorage.getItem('role');
  }

  getCurrentUser(): User {
    return this.user;
  }
}
