import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Office } from '../models/office';
import { FloorRequestConfig } from '../models/floor-request-config';

@Injectable({
  providedIn: 'root',
})
export class MapSearchService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://placebookapp.herokuapp.com/countries'
    );
  }

  getCities(country: string): Observable<string[]> {
    return this.http.get<string[]>(
      `https://placebookapp.herokuapp.com/countries/${country}/cities`
    );
  }

  getOffices(country: string, city: string): Observable<Office[]> {
    return this.http.get<Office[]>(
      `https://placebookapp.herokuapp.com/countries/${country}/cities/${city}/offices`
    );
  }

  getFloors(officeId: number): Observable<FloorRequestConfig[]> {
    return this.http.get<FloorRequestConfig[]>(
      `https://placebookapp.herokuapp.com/office/${officeId}/floors`
    );
  }
}
