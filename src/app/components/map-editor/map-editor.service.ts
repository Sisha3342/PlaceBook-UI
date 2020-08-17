import { Injectable } from '@angular/core';
import { Floor } from '../../models/floor';
import { Observable } from 'rxjs';
import { Office } from '../../models/office';
import { HttpClient } from '@angular/common/http';
import { FloorsConverterService } from './floor-converter/floors-converter.service';
import { FloorRequestConfig } from '../../models/floor-request-config';
import { BASE_API_URL } from '../../globals';

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
      `${BASE_API_URL}/office/${officeId}/configuration`,
      floors.map<FloorRequestConfig>((floor) =>
        this.floorConverter.convertToRequest(floor)
      )
    );
  }

  getFloors(officeId: number): Observable<FloorRequestConfig[]> {
    return this.http.get<FloorRequestConfig[]>(
      `${BASE_API_URL}/office/${officeId}/floors`
    );
  }
}
