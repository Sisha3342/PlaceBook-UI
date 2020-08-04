import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from './employee.service';
import { User } from '../../models/user';
import { ROLE } from '../../models/role';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent implements OnInit {
  employeeObject: User;
  role = ROLE;
  showSpinner = true;

  @Input()
  set employee(employeeObject: User) {
    this.employeeObject = employeeObject;
  }

  get employee(): User {
    return this.employeeObject;
  }

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  changeRole(role: string): void {
    if (role !== undefined && role !== this.employeeObject.role) {
      this.employeeService
        .changeRole(this.employeeObject.id, role)
        .subscribe((user: User) => {
          this.employeeObject.role = user.role;
        });
    }
    this.employeeService
      .changeRole(this.employeeObject.id, role)
      .subscribe(() => (this.showSpinner = false));
  }
}
