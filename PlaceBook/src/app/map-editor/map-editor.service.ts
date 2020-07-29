import { Injectable } from '@angular/core';
import { Floor } from '../models/floor';
import { Observable } from 'rxjs';
import { Office } from '../models/office';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MapEditorService {
  constructor(private http: HttpClient) {}

  saveFloors(officeId: number, floors: Floor[]): Observable<Office> {
    return this.http.post<Office>(
      `https://placebookapp.herokuapp.com/office/${officeId}/configuration`,
      floors,
      {
        withCredentials: true,
      }
    );
  }

  getFloors(officeId: number): Observable<Floor[]> {
    return this.http.get<Floor[]>(
      `https://placebookapp.herokuapp.com/office/${officeId}/floors`,
      {
        withCredentials: true,
      }
    );
  }
}
