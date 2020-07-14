import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  routeButtons: any[] = [
    {name: 'My bookings', route: '/my_bookings'},
    {name: 'Book', route: '/book'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
