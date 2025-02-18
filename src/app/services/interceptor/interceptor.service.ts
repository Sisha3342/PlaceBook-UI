import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    req = req.clone({ withCredentials: true });

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if ([200, 401].includes(error.status)) {
          this.authService.logout();
        }
        return throwError(error);
      })
    );
  }
}
