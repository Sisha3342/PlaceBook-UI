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
      image:
        'https://files.adme.ru/files/news/part_165/1658265/8882015-41015410-1-0-1514194714-1514194724-1500-1-1514194724-650-4561b7ccf5-1514279441.jpg',
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
