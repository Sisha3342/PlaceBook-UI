import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { OfficeAddress } from '../models/office-address';
import { Observable } from 'rxjs';
import { Office } from '../models/office';
import { ColumnId } from '../models/column';
import { Order } from '../models/Order';
import { BASE_API_URL } from '../globals';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  urlOffice = `${BASE_API_URL}/office`;

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

  getOffices(
    officeAddress: OfficeAddress,
    sortBy: string = ColumnId.country,
    order: string = Order.asc
  ): Observable<Office[]> {
    const params = new HttpParams()
      .set('order', order)
      .set('officeSort', sortBy)
      .set('limit', '1000')
      .set('offset', '0');

    if (!officeAddress.country) {
      return this.http.get<Office[]>('${BASE_API_URL}/offices', {
        params,
      });
    } else if (!officeAddress.city) {
      return this.http.get<Office[]>(
        `${BASE_API_URL}/countries/${officeAddress.country}/offices`,
        {
          params,
        }
      );
    }

    return this.http.get<Office[]>(
      `${BASE_API_URL}/countries/${officeAddress.country}/cities/${officeAddress.city}/offices`,
      {
        params,
      }
    );
  }
}
