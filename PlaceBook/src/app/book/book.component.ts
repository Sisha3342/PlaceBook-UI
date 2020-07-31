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
    marks: {
      markLightning: 0,
      markAir: 0,
      markVolume: 0,
      markCleaning: 0,
      markLocation: 0,
      feedback: '',
    },
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
