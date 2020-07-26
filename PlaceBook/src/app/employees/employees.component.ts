import { SearchService } from './../search/search.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  breakpoint = 0;

  employees: Employee[];

  constructor(private searchService: SearchService) {}

  filterEmployees(searchText: string): void {
    this.employees = this.searchService.searchUsers(searchText);
  }

  ngOnInit(): void {
    this.breakpoint = Math.floor(window.innerWidth / 450);
  }

  onResize(event): void {
    this.breakpoint = Math.floor(event.target.innerWidth / 450);
  }
}
