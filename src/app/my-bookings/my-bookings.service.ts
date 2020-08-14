import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { ColumnId } from '../models/column';
import { Order } from '../models/Order';
import { BASE_API_URL } from '../globals';

@Injectable({
  providedIn: 'root',
})
export class MyBookingsService {
  constructor(private http: HttpClient) {}

  getBookings(
    userId: number,
    status: string,
    sortBy: string = ColumnId.dateStart,
    order: string = Order.asc
  ): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${BASE_API_URL}/user/${userId}/bookings`, {
      params: new HttpParams()
        .set('status', status)
        .set('order', order)
        .set('bookingSort', sortBy)
        .set('limit', '1000')
        .set('offset', '0'),
    });
  }

  deleteBooking(id: number): Observable<Booking> {
    return this.http.delete<Booking>(`${BASE_API_URL}/user/booking/${id}`);
  }
}
