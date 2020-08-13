import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { BASE_API_URL } from '../globals';

@Injectable({
  providedIn: 'root',
})
export class MyBookingsService {
  constructor(private http: HttpClient) {}

  getBookings(userId: number, status: string): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${BASE_API_URL}/user/${userId}/bookings`, {
      params: new HttpParams().set('status', status),
    });
  }

  deleteBooking(id: number): Observable<Booking> {
    return this.http.delete<Booking>(`${BASE_API_URL}/user/booking/${id}`);
  }
}
