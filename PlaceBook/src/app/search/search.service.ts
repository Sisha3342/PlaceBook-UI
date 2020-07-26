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

  employees: User[];

  searchUsers(searchText: string): Observable<User[]> {
    return this.http.get<User[]>('https://placebookapp.herokuapp.com/users?', {
      params: new HttpParams()
        .set('offset', '1')
        .set('limit', '1000')
        .set('text', searchText),
      withCredentials: true,
    });
  }

  autocompleteUsers(searchText: string): string[] {
    return this.employees
      .filter((emStr) => emStr.name.indexOf(searchText) !== -1)
      .map((em) => em.name);
  }
}
