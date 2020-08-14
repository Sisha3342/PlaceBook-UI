import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from './employee.service';
import { User } from '../../models/user';
import { Role } from '../../models/Role';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent implements OnInit {
  employeeObject: User;
  role = Role;

  @Input()
  set employee(employeeObject: User) {
    this.employeeObject = employeeObject;
  }

  get employee(): User {
    return this.employeeObject;
  }

  constructor(
    private employeeService: EmployeeService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  changeRole(role: string): void {
    if (role !== undefined && role !== this.employeeObject.role) {
      this.employeeService
        .changeRole(this.employeeObject.id, role)
        .subscribe((user: User) => {
          this.employeeObject.role = user.role;
        });
    }
  }
}
