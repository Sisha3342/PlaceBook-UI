import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { BASE_API_URL } from 'src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  changeRole(id: number, role: string): Observable<User> {
    return this.http.put<User>(`${BASE_API_URL}/users/${id}`, {
      role,
    });
  }
}
