import { Component, OnInit, Input } from '@angular/core';
import { Employee } from './employee.class';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent implements OnInit {
  employeeObject: Employee;

  @Input()
  set employee(employeeObject: Employee) {
    this.employeeObject = employeeObject;
  }

  get employee(): Employee {
    return this.employeeObject;
  }

  constructor() {}

  ngOnInit(): void {}
}
