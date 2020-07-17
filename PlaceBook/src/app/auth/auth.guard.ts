import { Inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(AuthService) private auth: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['/login']);

      return false;
    }

    return true;
  }
}
