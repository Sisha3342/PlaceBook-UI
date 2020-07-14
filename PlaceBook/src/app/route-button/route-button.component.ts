import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-route-button',
  templateUrl: './route-button.component.html',
  styleUrls: ['./route-button.component.less']
})
export class RouteButtonComponent implements OnInit {
  @Input() name: string;
  iconType: string;
  setType: string;

  constructor() { }

  ngOnInit(): void {
    switch (this.name) {
      case 'My bookings':
        this.iconType = 'fa-list';
        this.setType = 'fas';
        break;
      case 'Book':
        this.iconType = 'fa-book';
        this.setType = 'fas';
        break;
      case 'Employees bookings':
        this.iconType = 'fa-address-book';
        this.setType = 'far';
        break;
      case 'Employees':
        this.iconType = 'fa-user-friends';
        this.setType = 'fas';
        break;
      case 'My maps':
        this.iconType = 'fa-map';
        this.setType = 'fas';
        break;
      case 'Editor':
        this.iconType = 'fa-tools';
        this.setType = 'fas';
        break;
      default:
        break;
    }
  }

}
