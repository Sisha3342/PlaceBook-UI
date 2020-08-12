import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  users: User[];

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {}
}
