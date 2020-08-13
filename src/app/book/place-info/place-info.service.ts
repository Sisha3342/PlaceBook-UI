import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingMark } from '../../models/booking-mark';
import { FormGroup } from '@angular/forms';
import { PlaceCurrentBooking } from '../../models/place-current-booking';
import { BASE_API_URL } from 'src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class PlaceInfoService {
  constructor(private http: HttpClient) {}

  getPlaceRating(placeId: number): Observable<BookingMark> {
    return this.http.get<BookingMark>(`${BASE_API_URL}/place/${placeId}/marks`);
  }

  getCurrentBookings(
    placeId: number,
    dateRange: FormGroup
  ): Observable<PlaceCurrentBooking[]> {
    return this.http.get<PlaceCurrentBooking[]>(
      `${BASE_API_URL}/place/${placeId}/bookings`,
      {
        params: new HttpParams()
          .set('timeStart', dateRange.value.start.toISOString())
          .set('timeEnd', dateRange.value.end.toISOString()),
      }
    );
  }
}
