import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  employees: User[] = [];

  searchUsers(
    offset: number,
    limit: number,
    searchText: string
  ): Observable<User[]> {
    const params = new HttpParams()
      .set('offset', offset.toString())
      .set('limit', limit.toString())
      .set('text', searchText);
    return this.http.get<User[]>(`https://placebookapp.herokuapp.com/users`, {
      params,
      withCredentials: true,
    });
  }

  autocompleteUsers(searchText: string): string[] {
    return this.employees
      .filter((emStr) => emStr.name.indexOf(searchText) !== -1)
      .map((em) => em.name);
  }
}
