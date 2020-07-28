import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Office } from './map-models/office';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://placebookapp.herokuapp.com/countries',
      {
        withCredentials: true,
      }
    );
  }

  getCities(country: string): Observable<string[]> {
    return this.http.get<string[]>(
      `https://placebookapp.herokuapp.com/countries/${country}/cities`,
      {
        withCredentials: true,
      }
    );
  }

  getOffices(country: string, city: string): Observable<Office[]> {
    return this.http.get<Office[]>(
      `https://placebookapp.herokuapp.com/
    countries/${country}/cities/${city}/officess`,
      {
        withCredentials: true,
      }
    );
  }
}
