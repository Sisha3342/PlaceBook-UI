import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Booking} from '../models/booking';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyBookingsComponent implements OnInit {

  DATA: Booking[] = [
    {place: '12A', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3', status: 'active'},
    {place: '121A', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3', status: 'active'},
    {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3', status: 'completed'},
    {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3', status: 'cancelled'},
    {place: '12A', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3', status: 'active'},
    {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3', status: 'cancelled'},
    {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3', status: 'completed'},
    {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3', status: 'cancelled'},
    {place: '12A', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3', status: 'active'},
    {place: '12K', date: '12.02.2020', country: 'Belarus', city: 'Minsk', address: 'Kuprevicha 3', status: 'completed'},
  ];

  constructor() {}

  ngOnInit(): void {
  }



  getData(status: string): Booking[]{
    // this.DATA = this.DATA.filter(
    //   item => item.status === status);
    return this.DATA.filter(
      item => item.status === status);
  }

}
