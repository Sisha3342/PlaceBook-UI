import { SearchService } from './../search/search.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  breakpoint = 0;
  users: User[];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.breakpoint = Math.floor(window.innerWidth / 450);
  }

  onResize(event): void {
    this.breakpoint = Math.floor(event.target.innerWidth / 450);
  }

  filterEmployees(searchText: string): void {
    this.searchService.searchUsers(0, 1000, searchText).subscribe((data) => {
      this.users = data;
    });
  }
}
