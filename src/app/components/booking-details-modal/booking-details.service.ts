import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BookingDetails } from '../../models/booking-details';
import { BASE_API_URL } from '../../globals';

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
      `${BASE_API_URL}/user/${userId}/booking/${bookingId}/info`
    );
  }
}
