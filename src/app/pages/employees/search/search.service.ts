import { Injectable } from '@angular/core';
import { User } from '../../../models/user';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { BASE_API_URL } from 'src/app/globals';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchUsers(
    offset: number,
    limit: number,
    searchText?: string
  ): Observable<User[]> {
    const params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString())
      .set('text', searchText);
    return this.http.get<User[]>(`${BASE_API_URL}/users`, {
      params,
    });
  }
}
