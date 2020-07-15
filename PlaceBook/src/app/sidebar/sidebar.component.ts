import { Component, OnInit } from '@angular/core';

type RouteButton = {
  name: string;
  route: string;
  iconType: string;
  setType: string;
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  routeButtons: RouteButton[] = [
    {name: 'My bookings', route: '/my_bookings', iconType: 'fa-list', setType: 'fas'},
    {name: 'Book', route: '/book', iconType: 'fa-book', setType: 'fas'},
    {name: 'Employees bookings', route: '/employees_bookings', iconType: 'fa-address-book', setType: 'far'},
    {name: 'Employees', route: '/employees', iconType: 'fa-user-friends', setType: 'fas'},
    {name: 'My maps', route: '/my_maps', iconType: 'fa-map', setType: 'fas'},
    {name: 'Editor', route: '/editor', iconType: 'fa-tools', setType: 'fas'}
  ];

  activeTabName = 'My bookings';

  constructor() { }

  ngOnInit(): void {
  }

  changeActiveTab(name: string): void {
    this.activeTabName = name;
  }

}
