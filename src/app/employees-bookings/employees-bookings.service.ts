import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { ROLE } from '../models/role';
import { BASE_API_URL } from '../globals';

@Injectable({
  providedIn: 'root',
})
export class EmployeesBookingsService {
  role = ROLE;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getBookings(status: string): Observable<Booking[]> {
    const adminUrl =
      this.authService.getCurrentUser().role === this.role.admin ? '/all' : '';

    return this.http.get<Booking[]>(
      `${BASE_API_URL}/employees/bookings${adminUrl}`,
      {
        params: new HttpParams().set('status', status),
      }
    );
  }

  deleteBooking(id: number): Observable<Booking> {
    return this.http.delete<Booking>(`${BASE_API_URL}/user/booking/${id}`);
  }
}
