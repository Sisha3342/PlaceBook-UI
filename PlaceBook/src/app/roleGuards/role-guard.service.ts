import { Inject, Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ROLE } from '../models/role';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  currentRole: string;
  role = ROLE;

  constructor(
    @Inject(AuthService) private auth: AuthService,
    private router: Router
  ) {
    this.currentRole = this.auth.getCurrentUser().role;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
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
        // if (this.currentRole === this.role.editor) {
        return true;
      // }
      // break;
      case 'editor':
        // if (this.currentRole === this.role.editor) {
        return true;
      // }
      // break;
      default:
        return true;
    }

    this.router.navigate(['**']);
    return true;
  }
}
