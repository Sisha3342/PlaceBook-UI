import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Booking } from '../models/booking';
import { Column } from '../models/column';
import { ColumnDataService } from './column-data.service';

@Component({
  selector: 'app-employees-bookings',
  templateUrl: './employees-bookings.component.html',
  styleUrls: ['./employees-bookings.component.scss'],
  providers: [ColumnDataService],
})
export class EmployeesBookingsComponent implements OnInit {
  DATA: Booking[] = [
    {
      place: '12A',
      logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
      name: 'Vova Vovich',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'active',
    },
    {
      place: '121A',
      logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
      name: 'Vova Vovich',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'active',
    },
    {
      place: '12K',
      logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
      name: 'Vova Vovich',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'completed',
    },
    {
      place: '12K',
      logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
      name: 'Vova Vovich',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'cancelled',
    },
    {
      place: '12A',
      logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
      name: 'Vova Vovich',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'active',
    },
    {
      place: '12K',
      logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
      name: 'Vova Vovich',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'cancelled',
    },
    {
      place: '12K',
      logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
      name: 'Vova Vovich',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'completed',
    },
    {
      place: '12K',
      logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
      name: 'Vova Vovich',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'cancelled',
    },
    {
      place: '12A',
      logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
      name: 'Vova Vovich',
      date: '12.02.2020',
      country: 'Belarus',
      city: 'Minsk',
      address: 'Kuprevicha 3',
      status: 'active',
    },
    {
      place: '12K',
      logo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
      name: 'Vova Vovich',
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

  constructor(private columnService: ColumnDataService) {}

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
