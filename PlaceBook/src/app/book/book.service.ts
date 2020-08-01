import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

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
}
