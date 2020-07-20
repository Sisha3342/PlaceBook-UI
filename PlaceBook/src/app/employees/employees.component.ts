import { Component, OnInit } from '@angular/core';
import { Employee } from './employee-card/employee.class';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  breakpoint = 0;

  constructor() {}

  employees: Employee[] = [
    {
      username: 'Ivan Ivanov',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8iiL1RupyUwjss4sVTGq5o6' +
        '6aL7NQZTEPVA&usqp=CAU',
      email: 'ivan@mail.by',
      role: 'hr',
    },
    {
      username: 'Sidor Sidorov',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLLGYrj9CsnPs6yFvv40WCpf' +
        'bQvDdRjdrgeQ&usqp=CAU',
      email: 'sidor@mail.by',
      role: 'hr',
    },
    {
      username: 'John Snou',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2_nvhHB59-k3oEmKLcoEJ6K' +
        'DLtmmGtTTnAw&usqp=CAU',
      email: 'john@mail.by',
      role: 'employee',
    },
    {
      username: 'Dart Weider',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-7HDyL2yAoh3mus9kpmtHuY' +
        'hdGwJ8OWAJhA&usqp=CAU',
      email: 'dart@mail.by',
      role: 'editor',
    },
    {
      username: 'Sidor Sidorov',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWKjdvXpCDApBk_4Q90dTWgH' +
        'LJDqMSljeSXQ&usqp=CAU',
      email: 'prosto@mail.by',
      role: 'hr',
    },
    {
      username: 'Leo Leo',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX7hox5Syp_TV4bHR0o6t6Q' +
        'ObI7-XOAY0Kg&usqp=CAU',
      email: 'leo@mail.by',
      role: 'employee',
    },
    {
      username: 'Petr Ivanov',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu58nVQrAzsBYg4n7QLsdTc7' +
        'IYpb_IC0zOTg&usqp=CAU',
      email: 'petr@mail.by',
      role: 'hr',
    },
    {
      username: 'Dart Weider',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIVQr5tB9j4aW34gWiJ_XTIe' +
        'Xb78FaFNDsQA&usqp=CAU',
      email: 'weider@mail.by',
      role: 'editor',
    },
  ];

  filterEmployees(searchText: string): void {
    this.employees = this.employees.filter(
      (em) => em.username.indexOf(searchText) !== -1
    );
  }

  ngOnInit(): void {
    this.breakpoint = Math.floor(window.innerWidth / 450);
  }

  onResize(event): void {
    this.breakpoint = Math.floor(event.target.innerWidth / 450);
  }
}
