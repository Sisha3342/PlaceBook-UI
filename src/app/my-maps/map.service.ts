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

  postOffice(formData: any): Observable<Office> {
    const requestBody = {
      address: formData.address,
      city: formData.city,
      country: formData.country,
      worktimeStart: formData.worktimeStart + ':00',
      worktimeEnd: formData.worktimeEnd + ':00',
    };
    return this.http.post<Office>(this.urlOffice, requestBody);
  }

  updateOffice(formData: any): Observable<Office> {
    const requestBody = {
      address: formData.address,
      city: formData.city,
      country: formData.country,
      worktimeStart: formData.worktimeStart + ':00',
      worktimeEnd: formData.worktimeEnd + ':00',
    };
    return this.http.put<Office>(
      this.urlOffice + `/${formData.id}`,
      requestBody
    );
  }

  deleteOffice(officeId: number): Observable<Office> {
    return this.http.delete<Office>(this.urlOffice + `/${officeId}`);
  }

  getOffices(officeAddress: OfficeAddress): Observable<Office[]> {
    if (!officeAddress.country) {
      return this.http.get<Office[]>(
        'https://placebookapp.herokuapp.com/offices'
      );
    } else if (!officeAddress.city) {
      return this.http.get<Office[]>(
        `https://placebookapp.herokuapp.com/countries/${officeAddress.country}/offices`
      );
    }

    return this.http.get<Office[]>(
      `https://placebookapp.herokuapp.com/countries/${officeAddress.country}/cities/${officeAddress.city}/offices`
    );
  }
}
