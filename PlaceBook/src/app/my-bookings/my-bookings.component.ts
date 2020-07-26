import { Component } from '@angular/core';
import { Booking } from '../models/booking';
import { Column } from '../models/column';
import { MyBookingsColumnService } from './my-bookings-column.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
  providers: [MyBookingsColumnService],
})
export class MyBookingsComponent {
  DATA: Booking[] = [
    {
      place: '12A',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'active',
    },
    {
      place: '121A',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'active',
    },
    {
      place: '12K',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'completed',
    },
    {
      place: '12K',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'cancelled',
    },
    {
      place: '12A',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'active',
    },
    {
      place: '12K',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'cancelled',
    },
    {
      place: '12K',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'completed',
    },
    {
      place: '12K',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'cancelled',
    },
    {
      place: '12A',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'active',
    },
    {
      place: '12K',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'completed',
    },
  ];

  constructor(private columnService: MyBookingsColumnService) {}

  getData(status: string): Booking[] {
    return this.DATA.filter((item) => item.status === status);
  }

  getColumns(status: string): Column[] {
    return this.columnService.getColumns(status);
  }
}
