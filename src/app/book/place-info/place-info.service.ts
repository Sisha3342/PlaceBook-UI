import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingMark } from '../../models/booking-mark';
import { FormGroup } from '@angular/forms';
import { PlaceCurrentBooking } from '../../models/place-current-booking';

@Injectable({
  providedIn: 'root',
})
export class PlaceInfoService {
  constructor(private http: HttpClient) {}

  getPlaceRating(placeId: number): Observable<BookingMark> {
    return this.http.get<BookingMark>(
      `https://placebookapp.herokuapp.com/place/${placeId}/marks`,
      {
        withCredentials: true,
      }
    );
  }

  getCurrentBookings(
    placeId: number,
    dateRange: FormGroup
  ): Observable<PlaceCurrentBooking[]> {
    return this.http.get<PlaceCurrentBooking[]>(
      `https://placebookapp.herokuapp.com/place/${placeId}/bookings`,
      {
        params: new HttpParams()
          .set('timeStart', dateRange.value.start.toISOString())
          .set('timeEnd', dateRange.value.end.toISOString()),
        withCredentials: true,
      }
    );
  }
}
