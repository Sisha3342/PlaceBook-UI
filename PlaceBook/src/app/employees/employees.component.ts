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
        'https://api.time.com/wp-content/uploads/2015/04/512137691.jpg?w=600&quality=85' +
        '6aL7NQZTEPVA&usqp=CAU',
      email: 'ivan@mail.by',
      role: 'employee',
    },
    {
      username: 'Sidor Sidorov',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
      email: 'sidor@mail.by',
      role: 'employee',
    },
    {
      username: 'John Snou',
      photo:
        'https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400',
      email: 'john@mail.by',
      role: 'employee',
    },
    {
      username: 'Dart Weider',
      photo: 'https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg',
      email: 'dart@mail.by',
      role: 'editor',
    },
    {
      username: 'Sidor Sidorov',
      photo:
        'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859',
      email: 'prosto@mail.by',
      role: 'hr',
    },
    {
      username: 'Leo Leo',
      photo:
        'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      email: 'leo@mail.by',
      role: 'employee',
    },
    {
      username: 'Petr Ivanov',
      photo:
        'https://manofmany.com/wp-content/uploads/2019/08/50-Medium-Length-Hairstyles-Haircut-Tips-for-Men-Feature.jpg',
      email: 'petr@mail.by',
      role: 'hr',
    },
    {
      username: 'Dart Weider',
      photo:
        'https://i.pinimg.com/originals/c9/e9/70/c9e970b49e846bde04ef66a5c0229b53.jpg',
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
