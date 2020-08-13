import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { Place } from '../models/place';
import { GlobalVariable } from '../globals';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getPlaces(
    floorId: number,
    dateStart: string,
    dateEnd: string
  ): Observable<Place[]> {
    return this.http.get<Place[]>(
      `${GlobalVariable.BASE_API_URL}/floor/${floorId}/places`,
      {
        params: new HttpParams()
          .set('timeStart', dateStart)
          .set('timeEnd', dateEnd),
      }
    );
  }

  book(
    userId: number,
    placeId: number,
    dateStart: string,
    dateEnd: string
  ): Observable<Booking> {
    return this.http.post<Booking>(
      `${GlobalVariable.BASE_API_URL}/user/${userId}/booking`,
      {
        placeId,
        timeStart: dateStart,
        timeEnd: dateEnd,
      }
    );
  }

  subscribe(placeId: number): Observable<Place> {
    return this.http.post<Place>(
      `${GlobalVariable.BASE_API_URL}/subscribe/${placeId}`,
      {}
    );
  }
}
