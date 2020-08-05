import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  breakpoint = 0;
  users: User[];

  constructor() {}

  ngOnInit(): void {
    this.breakpoint = Math.floor(window.innerWidth / 450);
  }

  onResize(event): void {
    this.breakpoint = Math.floor(event.target.innerWidth / 450);
  }
}
