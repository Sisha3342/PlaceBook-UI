import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService extends ErrorHandler {
  constructor(
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private zone: NgZone
  ) {
    super();
  }

  handleError(error: any): void {
    if (error.code === 401) {
      this.snackbar.open(error.message, 'Close', {
        verticalPosition: 'top',
        duration: 3000,
      });
      this.zone.run(() => this.authService.logout());
    } else {
      super.handleError(error);
    }
  }
}
