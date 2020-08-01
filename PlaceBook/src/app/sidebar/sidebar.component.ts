import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { ROLE } from '../models/role';
import {
  RouteButton,
  myBookingsButton,
  employeesBookingsButton,
  employeesButton,
  myMapsButton,
} from './route-button/route-buttons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  currentRole: string;
  role = ROLE;
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

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.currentRole = this.authService.getCurrentUser().role;
  }

  isActive(route): boolean {
    return route === this.router.url;
  }

  getRouteButtons(): RouteButton[] {
    switch (this.currentRole) {
      case this.role.user:
        return [myBookingsButton];
      case this.role.hr:
        return [myBookingsButton, employeesBookingsButton];
      case this.role.editor:
        return [myBookingsButton, myMapsButton];
      case this.role.admin:
        return [myBookingsButton, employeesBookingsButton, employeesButton];
      default:
        return [];
    }
  }
}
