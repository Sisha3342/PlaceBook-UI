import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  changeRole(id: number, role: string): Observable<User> {
    return this.http.put<User>(
      `https://placebookapp.herokuapp.com/users/${id}`,
      {
        role: role,
      },
      {
        withCredentials: true,
      }
    );
  }

  getUsers(offset: number, limit: number, name?: string): Observable<User[]> {
    let params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString());
    if (name) {
      params = params.set('text', name);
    }

    return this.http.get<User[]>('https://placebookapp.herokuapp.com/users', {
      params: params,
      withCredentials: true,
    });
  }
}
