import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.scss']
})
export class BookingStatusComponent implements OnInit {

  @Input() status: string;

  constructor() { }

  ngOnInit(): void {
  }
}
