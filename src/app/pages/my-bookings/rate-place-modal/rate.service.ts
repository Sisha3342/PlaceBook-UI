import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingMark } from '../../../models/booking-mark';
import { Observable } from 'rxjs';
import { BASE_API_URL } from 'src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class RateService {
  constructor(private http: HttpClient) {}

  ratePlace(
    bookingId: number,
    bookingMark: BookingMark
  ): Observable<BookingMark> {
    return this.http.post<BookingMark>(
      `${BASE_API_URL}/booking/${bookingId}/mark`,
      bookingMark
    );
  }
}
