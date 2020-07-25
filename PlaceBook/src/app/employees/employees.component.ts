import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { EmployeeService } from './employee-card/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  breakpoint = 0;
  users: User[];

  constructor(private employeeService: EmployeeService) {}

  filterEmployees(searchText: string): void {
    this.users = this.users.filter(
      (em) => (em.name + ' ' + em.surname).indexOf(searchText) !== -1
    );
  }

  ngOnInit(): void {
    this.employeeService.getUsers(0, 100).subscribe((users: User[]) => {
      this.users = users;
    });

    this.breakpoint = Math.floor(window.innerWidth / 450);
  }

  onResize(event): void {
    this.breakpoint = Math.floor(event.target.innerWidth / 450);
  }
}
