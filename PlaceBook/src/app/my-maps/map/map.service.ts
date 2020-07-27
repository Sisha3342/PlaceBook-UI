import { HttpClient } from '@angular/common/http';
import { Office } from './../../models/office';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  formData: Office;

  constructor(private http: HttpClient) {}

  postOffice(formData: Office) {
    return this.http.post(
      `https://placebookapp.herokuapp.com/office/{officeId}`,
      formData
    );
  }
}
