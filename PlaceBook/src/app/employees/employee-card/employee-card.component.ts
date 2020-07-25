import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from './employee.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent implements OnInit {
  employeeObject: User;

  @Input()
  set employee(employeeObject: User) {
    this.employeeObject = employeeObject;
  }

  get employee(): User {
    return this.employeeObject;
  }

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  changeRole(role: 'User' | 'HR' | 'Editor'): void {
    this.employeeService.changeRole(this.employeeObject.id, role);
  }
}
