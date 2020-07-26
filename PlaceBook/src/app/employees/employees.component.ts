import { SearchService } from './../search/search.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  breakpoint = 0;

  employees: User[] = [];

  constructor(private searchService: SearchService, private http: HttpClient) {}

  getAllEmployees(): Observable<User[]> {
    const params = new HttpParams()
      .set('offset', '0')
      .set('limit', '20')
      .set('text', '');

    return this.http.get<User[]>(`https://placebookapp.herokuapp.com/users`, {
      params,
      withCredentials: true,
    });
  }

  filterEmployees(searchText: string): void {
    this.searchService.searchUsers(0, 1000, searchText).subscribe((data) => {
      this.employees = data;
    });
  }

  ngOnInit(): void {
    this.getAllEmployees().subscribe((data) => {
      this.employees = data;
    });

    this.breakpoint = Math.floor(window.innerWidth / 470);
  }

  onResize(event): void {
    this.breakpoint = Math.floor(event.target.innerWidth / 470);
  }
}
