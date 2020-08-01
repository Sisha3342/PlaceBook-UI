import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  book(
    userId: number,
    dateRange: FormGroup,
    placeNumber: number,
    floorNumber: number,
    officeId: number
  ): Observable<Booking> {
    return this.http.post<Booking>(
      `https://placebookapp.herokuapp.com/user/${userId}/booking`,
      {
        timeStart: dateRange.value.start,
        timeEnd: dateRange.value.end,
        placeNumber: placeNumber,
        floorNumber: floorNumber,
        officeId: officeId,
      },
      {
        withCredentials: true,
      }
    );
  }

  getPlaces(floorId: number, dateRange: FormGroup): Observable<Place[]> {
    return this.http.get<Place[]>(
      `https://placebookapp.herokuapp.com/floor/${floorId}/places`,
      {
        params: new HttpParams()
          .set('timeStart', dateRange.value.start.toISOString())
          .set('timeEnd', dateRange.value.end.toISOString()),
        withCredentials: true,
      }
    );
  }
}
