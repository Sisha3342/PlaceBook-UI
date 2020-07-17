import { Component, OnInit } from '@angular/core';
import { Employee } from './employee-card/employee.class';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  constructor() {}
  employees: Employee[] = [
    {
      username: 'Ivan Ivanov',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8iiL1RupyUwjss4sVTGq5o66aL7NQZTEPVA&usqp=CAU',
      email: 'ivan@mail.by',
      role: 'hr',
    },
    {
      username: 'Sidor Sidorov',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLLGYrj9CsnPs6yFvv40WCpfbQvDdRjdrgeQ&usqp=CAU',
      email: 'sidor@mail.by',
      role: 'hr',
    },
    {
      username: 'John Snou',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLIOWxbmNzYWVHdX9RQDFgl4iwM8yeDfFZtw&usqp=CAU',
      email: 'john@mail.by',
      role: 'employee',
    },
    {
      username: 'Dart Weider',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-7HDyL2yAoh3mus9kpmtHuYhdGwJ8OWAJhA&usqp=CAU',
      email: 'dart@mail.by',
      role: 'editor',
    },
    {
      username: 'Sidor Sidorov',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWKjdvXpCDApBk_4Q90dTWgHLJDqMSljeSXQ&usqp=CAU',
      email: 'prosto@mail.by',
      role: 'hr',
    },
    {
      username: 'Leo Leo',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJX7hox5Syp_TV4bHR0o6t6QObI7-XOAY0Kg&usqp=CAU',
      email: 'leo@mail.by',
      role: 'employee',
    },
    {
      username: 'Petr Ivanov',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu58nVQrAzsBYg4n7QLsdTc7IYpb_IC0zOTg&usqp=CAU',
      email: 'petr@mail.by',
      role: 'hr',
    },
    {
      username: 'Dart Weider',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIVQr5tB9j4aW34gWiJ_XTIeXb78FaFNDsQA&usqp=CAU',
      email: 'weider@mail.by',
      role: 'editor',
    },
  ];
  ngOnInit(): void {}
}
