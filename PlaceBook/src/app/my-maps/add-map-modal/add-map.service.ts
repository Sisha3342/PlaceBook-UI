import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Office } from '../../models/office';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  formData: Office;

  constructor(private http: HttpClient) {}

  postOffice(formData: Office): Observable<Office> {
    return this.http.post<Office>(
      'https://placebookapp.herokuapp.com/office',
      formData,
      {
        withCredentials: true,
      }
    );
  }
}
