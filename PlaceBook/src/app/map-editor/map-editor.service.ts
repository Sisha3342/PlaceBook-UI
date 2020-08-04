import { Injectable } from '@angular/core';
import { Floor } from '../models/floor';
import { Observable } from 'rxjs';
import { Office } from '../models/office';
import { HttpClient } from '@angular/common/http';
import { FloorsConverterService } from './floors-converter.service';
import { FloorRequestConfig } from '../models/floor-request-config';

@Injectable({
  providedIn: 'root',
})
export class MapEditorService {
  constructor(
    private http: HttpClient,
    private floorConverter: FloorsConverterService
  ) {}

  saveFloors(officeId: number, floors: Floor[]): Observable<Office> {
    return this.http.post<Office>(
      `https://placebookapp.herokuapp.com/office/${officeId}/configuration`,
      floors.map<FloorRequestConfig>((floor) =>
        this.floorConverter.convertToRequest(floor)
      ),
      {
        withCredentials: true,
      }
    );
  }

  saveChanges(floors: Floor[]): void {
    localStorage.setItem('floorsConfig', JSON.stringify(floors));
  }

  getFloors(officeId: number): Observable<FloorRequestConfig[]> {
    return this.http.get<FloorRequestConfig[]>(
      `https://placebookapp.herokuapp.com/office/${officeId}/floors`,
      {
        withCredentials: true,
      }
    );
  }
}
