import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Role } from '../models/Role';
import { ColumnId } from '../models/column';
import { Order } from '../models/Order';
import { BASE_API_URL } from '../globals';

@Injectable({
  providedIn: 'root',
})
export class EmployeesBookingsService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getBookings(
    status: string,
    sortBy: string = ColumnId.dateStart,
    order: string = Order.asc
  ): Observable<Booking[]> {
    const adminUrl =
      this.authService.getCurrentUser().role === Role.admin ? '/all' : '';

    return this.http.get<Booking[]>(
      `${BASE_API_URL}/employees/bookings${adminUrl}`,
      {
        params: new HttpParams()
          .set('status', status)
          .set('order', order)
          .set('bookingSort', sortBy)
          .set('limit', '1000')
          .set('offset', '0'),
      }
    );
  }

  deleteBooking(id: number): Observable<Booking> {
    return this.http.delete<Booking>(`${BASE_API_URL}/user/booking/${id}`);
  }
}
