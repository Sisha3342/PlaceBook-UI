import { Inject, Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Role } from '../models/Role';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  currentRole: string;
  role = Role;

  constructor(
    @Inject(AuthService) private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.currentRole = this.auth.getCurrentUser().role;

    switch (next.routeConfig.path) {
      case 'employees_bookings':
        if (
          this.currentRole === this.role.hr ||
          this.currentRole === this.role.admin
        ) {
          return true;
        }
        break;
      case 'employees':
        if (this.currentRole === this.role.admin) {
          return true;
        }
        break;
      case 'my_maps':
        if (this.currentRole === this.role.editor) {
          return true;
        }
        break;
      case 'editor':
        if (this.currentRole === this.role.editor) {
          return true;
        }
        break;
    }

    this.router.navigate(['**']);
    return false;
  }
}
