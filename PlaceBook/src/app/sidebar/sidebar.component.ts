import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  routeButtons: any[] = [
    {name: 'My bookings', route: '/my_bookings'},
    {name: 'Book', route: '/book'},
    {name: 'Employees bookings', route: '/employees_bookings'},
    {name: 'Employees', route: '/employees'},
    {name: 'My maps', route: '/my_maps'},
    {name: 'Editor', route: '/editor'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
