import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyBookingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
