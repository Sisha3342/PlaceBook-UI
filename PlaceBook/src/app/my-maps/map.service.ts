import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfficeAddress } from '../models/office-address';
import { Observable } from 'rxjs';
import { Office } from '../models/office';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  urlOffice = 'https://placebookapp.herokuapp.com/office';

  constructor(private http: HttpClient) {}

  deleteOffice(officeId: number): Observable<Office> {
    return this.http.delete<Office>(this.urlOffice + `/${officeId}`, {
      withCredentials: true,
    });
  }
  getOffices(officeAddress: OfficeAddress): Observable<Office[]> {
    if (officeAddress.country === undefined) {
      return this.http.get<Office[]>(
        'https://placebookapp.herokuapp.com/offices',
        {
          withCredentials: true,
        }
      );
    } else if (officeAddress.city === undefined) {
      return this.http.get<Office[]>(
        `https://placebookapp.herokuapp.com/countries/${officeAddress.country}/offices`,
        {
          withCredentials: true,
        }
      );
    }

    return this.http.get<Office[]>(
      `https://placebookapp.herokuapp.com/countries/${officeAddress.country}/cities/${officeAddress.city}/offices`,
      {
        withCredentials: true,
      }
    );
  }
}
