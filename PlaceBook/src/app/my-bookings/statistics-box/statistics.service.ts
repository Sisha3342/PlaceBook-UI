import { Injectable } from '@angular/core';
import { Statistics } from './statistics';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  getStatistics(id: number): Observable<Statistics> {
    return this.http.get<Statistics>(
      `https://placebookapp.herokuapp.com/user/${id}/booking/statistics`,
      {
        withCredentials: true,
      }
    );
  }
}
