import { Component, OnInit } from '@angular/core';
import { Place } from '../../models/place-info';
import { Booking } from '../../models/booking';

@Component({
  selector: 'app-place-info',
  templateUrl: './place-info.component.html',
  styleUrls: ['./place-info.component.scss'],
})
export class PlaceInfoComponent implements OnInit {
  headers = ['date', 'userName'];

  DATA: Place[] = [
    {
      date: '13.02.2020-12.03.2015',
      userName: 'Maks Lappo',
    },
    {
      date: '14.05.2020',
      userName: 'Sasha001',
    },
  ];

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
      feedBack: '',
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
