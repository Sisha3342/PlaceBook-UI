import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type RouteButton = {
  name: string;
  route: string;
  iconType: string;
  setType: string;
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  routeButtons: RouteButton[] = [
    {
      name: 'My bookings',
      route: '/my_bookings',
      iconType: 'fa-list',
      setType: 'fas',
    },
    {
      name: 'Employees bookings',
      route: '/employees_bookings',
      iconType: 'fa-address-book',
      setType: 'far',
    },
    {
      name: 'Employees',
      route: '/employees',
      iconType: 'fa-user-friends',
      setType: 'fas',
    },
    {
      name: 'My maps',
      route: '/my_maps',
      iconType: 'fa-map',
      setType: 'fas',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  isActive(route): boolean {
    return route === this.router.url;
  }
}
