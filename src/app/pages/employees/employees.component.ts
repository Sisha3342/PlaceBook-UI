import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  users: User[];

  constructor() {}
}
