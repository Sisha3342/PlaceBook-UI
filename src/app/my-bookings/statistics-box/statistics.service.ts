import { Injectable } from '@angular/core';
import { Statistics } from '../../models/statistics';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalVariable } from 'src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  getStatistics(id: number): Observable<Statistics> {
    return this.http.get<Statistics>(
      `${GlobalVariable.BASE_API_URL}/user/${id}/booking/statistics`
    );
  }
}
