import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BookingDetails } from '../models/booking-details';

@Injectable({
  providedIn: 'root',
})
export class BookingDetailsService {
  constructor(private http: HttpClient) {}

  getBookingDetails(
    bookingId: number,
    userId: number
  ): Observable<BookingDetails> {
    return this.http.get<BookingDetails>(
      `https://placebookapp.herokuapp.com/user/${userId}/booking/${bookingId}/info`
    );
  }
}
