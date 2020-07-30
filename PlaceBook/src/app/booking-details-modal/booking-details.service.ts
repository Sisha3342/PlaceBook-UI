import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookingDetailsService {
  constructor(private http: HttpClient) {}

  getBookingDetails(bookingId: number, userId: number): Observable<Booking> {
    return this.http.get<Booking>(
      `https://placebookapp.herokuapp.com/user/${userId}/booking/${bookingId}/info`,
      {
        withCredentials: true,
      }
    );
  }
}
