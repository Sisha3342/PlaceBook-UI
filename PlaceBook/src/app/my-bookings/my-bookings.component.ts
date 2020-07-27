import { Component } from '@angular/core';
import { Booking } from '../models/booking';
import { Column } from '../models/column';
import { MyBookingsColumnService } from './my-bookings-column.service';
import { BookingDetailsModalComponent } from '../booking-details-modal/booking-details-modal.component';
import { MatDialog } from '@angular/material/dialog';

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
      feedback: '',
      rating: {
        light: 3.0,
        air: 5.0,
        noise: 2.4,
        clean: 3.8,
        location: 2.7,
      },
    },
    {
      place: '121A',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'active',
      feedback: 'Все хорошо',
      rating: {
        light: 3.0,
        air: 5.0,
        noise: 2.4,
        clean: 3.8,
        location: 2.7,
      },
    },
    {
      place: '12K',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'completed',
      feedback: 'Super',
      rating: {
        light: 3.0,
        air: 5.0,
        noise: 2.4,
        clean: 3.8,
        location: 2.7,
      },
    },
    {
      place: '12K',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'cancelled',
      feedback: '',
      rating: {
        light: 3.0,
        air: 5.0,
        noise: 2.4,
        clean: 3.8,
        location: 2.7,
      },
    },
    {
      place: '12A',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'active',
      feedback: 'Ok',
      rating: {
        light: 3.0,
        air: 5.0,
        noise: 2.4,
        clean: 3.8,
        location: 2.7,
      },
    },
    {
      place: '12K',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'cancelled',
      feedback: '',
      rating: {
        light: 3.0,
        air: 5.0,
        noise: 2.4,
        clean: 3.8,
        location: 2.7,
      },
    },
    {
      place: '12K',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'completed',
      feedback: '',
      rating: {
        light: 3.0,
        air: 5.0,
        noise: 2.4,
        clean: 3.8,
        location: 2.7,
      },
    },
    {
      place: '12K',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'cancelled',
      feedback: '',
      rating: {
        light: 3.0,
        air: 5.0,
        noise: 2.4,
        clean: 3.8,
        location: 2.7,
      },
    },
    {
      place: '12A',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'active',
      feedback: '',
      rating: {
        light: 3.0,
        air: 5.0,
        noise: 2.4,
        clean: 3.8,
        location: 2.7,
      },
    },
    {
      place: '12K',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 2',
      status: 'completed',
      feedback: '',
      rating: {
        light: 3.0,
        air: 5.0,
        noise: 2.4,
        clean: 3.8,
        location: 2.7,
      },
    },
  ];

  constructor(
    private columnService: MyBookingsColumnService,
    public dialog: MatDialog
  ) {}

  getData(status: string): Booking[] {
    return this.DATA.filter((item) => item.status === status);
  }

  getColumns(status: string): Column[] {
    return this.columnService.getColumns(status);
  }

  openBookingDetailsModal(event: Event, booking: Booking): void {
    this.dialog.open(BookingDetailsModalComponent, {
      width: '30rem',
      data: booking,
    });
  }
}
