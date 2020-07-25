import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/booking';
import { Column } from '../models/column';
import { ColumnService } from '../my-bookings/column.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
  providers: [ColumnService],
})
export class MyBookingsComponent implements OnInit {
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
  columns: Column[];

  cancelColumn = {
    id: 'cancelButton',
    type: 'cancel',
  };

  rateColumn = {
    id: 'rateButton',
    type: 'rate',
  };

  constructor(private columnService: ColumnService) {}

  ngOnInit(): void {
    this.columns = this.columnService.getColumns();
  }

  getData(status: string): Booking[] {
    return this.DATA.filter((item) => item.status === status);
  }

  getColumns(status: string): Column[] {
    const columns = [...this.columns];

    if (status === 'active') {
      columns.push(this.cancelColumn);
    }

    if (status === 'completed') {
      columns.push(this.rateColumn);
    }

    return columns;
  }
}
