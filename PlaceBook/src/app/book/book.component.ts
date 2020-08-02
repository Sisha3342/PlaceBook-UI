import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [MatDatepickerModule],
})
export class BookComponent implements OnInit {
  bookingObj: Booking = {
    id: null,
    placeNumber: '',
    userName: '',
    userSurname: '',
    address: {
      country: '',
      city: '',
      address: '',
    },
    timeStart: '',
    timeEnd: '',
    status: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
