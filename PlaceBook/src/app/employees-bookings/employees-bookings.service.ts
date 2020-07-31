import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeesBookingsService {
  constructor(private http: HttpClient) {}

  getBookings(status: string): Observable<Booking[]> {
    return this.http.get<Booking[]>(
      `https://placebookapp.herokuapp.com/employees/bookings`,
      {
        params: new HttpParams().set('status', status),
        withCredentials: true,
      }
    );
  }
}
