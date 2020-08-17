import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.scss'],
})
export class BookingStatusComponent {
  @Input() status: string;

  constructor() {}
}
