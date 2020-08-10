import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { Place } from '../models/place';

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
      `https://placebookapp.herokuapp.com/floor/${floorId}/places`,
      {
        params: new HttpParams()
          .set('timeStart', dateStart)
          .set('timeEnd', dateEnd),
        withCredentials: true,
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
      `https://placebookapp.herokuapp.com/user/${userId}/booking`,
      {
        placeId,
        timeStart: dateStart,
        timeEnd: dateEnd,
      },
      {
        withCredentials: true,
      }
    );
  }

  subscribe(placeId: number): Observable<Place> {
    return this.http.post<Place>(
      `https://placebookapp.herokuapp.com/subscribe/${placeId}`,
      {},
      {
        withCredentials: true,
      }
    );
  }
}
