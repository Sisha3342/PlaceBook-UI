import { Office } from '.././models/office';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfficeAddress } from '../models/office-address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  urlOffice = 'https://placebookapp.herokuapp.com/office';

  constructor(private http: HttpClient) {}

  postOffice(formData: Office): Observable<Office> {
    return this.http.post<Office>(this.urlOffice, formData, {
      withCredentials: true,
    });
  }

  getOffice(officeId: number): Observable<Office> {
    return this.http.get<Office>(this.urlOffice + `/${officeId}`, {
      withCredentials: true,
    });
  }

  updateOffice(formData: Office): Observable<Office> {
    return this.http.put<Office>(this.urlOffice, formData, {
      withCredentials: true,
    });
  }

  deleteOffice(officeId: number): Observable<Office> {
    return this.http.delete<Office>(this.urlOffice + `/${officeId}`, {
      withCredentials: true,
    });
  }

  getAllOffices(officeAddress: OfficeAddress): Observable<Office[]> {
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
