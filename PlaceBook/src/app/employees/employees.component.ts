import { SearchService } from './../search/search.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  breakpoint = 0;

  employees: User[] = [];

  constructor(private searchService: SearchService) {}

  filterEmployees(searchText: string): void {
    this.searchService.searchUsers(0, 1000, searchText).subscribe((em) => {
      this.employees = em;
    });
  }

  ngOnInit(): void {
    this.breakpoint = Math.floor(window.innerWidth / 450);
  }

  onResize(event): void {
    this.breakpoint = Math.floor(event.target.innerWidth / 450);
  }
}
