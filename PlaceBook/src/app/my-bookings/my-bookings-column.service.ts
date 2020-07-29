import { Injectable } from '@angular/core';
import { Column } from '../models/column';
import { STATUS } from '../models/status';

@Injectable({
  providedIn: 'root',
})
export class MyBookingsColumnService {
  status = STATUS;

  constructor() {}

  columns: Column[] = [
    {
      id: 'place',
      label: 'Place No.',
      field: 'placeNumber',
      type: 'booking',
    },
    {
      id: 'dateStart',
      label: 'Date start',
      field: 'timeStart',
      type: 'startDate',
    },
    {
      id: 'dateEnd',
      label: 'Date end',
      field: 'timeEnd',
      type: 'endDate',
    },
    {
      id: 'country',
      label: 'Country',
      field: 'country',
      type: 'address',
    },
    {
      id: 'city',
      label: 'City',
      field: 'city',
      type: 'address',
    },
    {
      id: 'address',
      label: 'Address',
      field: 'address',
      type: 'address',
    },
  ];

  cancelColumn = {
    id: 'cancelButton',
    type: 'cancel',
    tooltip: 'Cancel booking',
  };

  rateColumn = {
    id: 'rateButton',
    type: 'rate',
    tooltip: 'Rate booking',
  };

  getColumns(status: string): Column[] {
    const columns = [...this.columns];

    if (status === this.status.active) {
      columns.push(this.cancelColumn);
    }

    if (status === this.status.completed) {
      columns.push(this.rateColumn);
    }

    return columns;
  }
}
