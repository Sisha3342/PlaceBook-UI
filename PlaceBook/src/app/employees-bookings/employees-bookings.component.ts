import { Component } from '@angular/core';
import { Booking } from '../models/booking';
import { Column } from '../models/column';
import { EmployeesBookingsColumnService } from './employees-bookings-column.service';
import { STATUS } from '../models/status';

@Component({
  selector: 'app-employees-bookings',
  templateUrl: './employees-bookings.component.html',
  styleUrls: ['./employees-bookings.component.scss'],
  providers: [EmployeesBookingsColumnService],
})
export class EmployeesBookingsComponent {
  status = STATUS;

  DATA: Booking[] = [
    // {
    //   place: '12A',
    //   logo:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
    //   name: 'Vova Vovich',
    //   date: '12.02.2020',
    //   address: {
    //     country: 'Belarus',
    //     city: 'Minsk',
    //     address: 'Kuprevicha 3',
    //   },
    //   status: 'ACTIVE',
    // },
    // {
    //   place: '121A',
    //   logo:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
    //   name: 'Vova Vovich',
    //   date: '12.02.2020',
    //   country: 'Belarus',
    //   city: 'Minsk',
    //   address: 'Kuprevicha 3',
    //   status: 'active',
    // },
    // {
    //   place: '12K',
    //   logo:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
    //   name: 'Vova Vovich',
    //   date: '12.02.2020',
    //   country: 'Belarus',
    //   city: 'Minsk',
    //   address: 'Kuprevicha 3',
    //   status: 'completed',
    // },
    // {
    //   place: '12K',
    //   logo:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
    //   name: 'Vova Vovich',
    //   date: '12.02.2020',
    //   country: 'Belarus',
    //   city: 'Minsk',
    //   address: 'Kuprevicha 3',
    //   status: 'cancelled',
    // },
    // {
    //   place: '12A',
    //   logo:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
    //   name: 'Vova Vovich',
    //   date: '12.02.2020',
    //   country: 'Belarus',
    //   city: 'Minsk',
    //   address: 'Kuprevicha 3',
    //   status: 'active',
    // },
    // {
    //   place: '12K',
    //   logo:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
    //   name: 'Vova Vovich',
    //   date: '12.02.2020',
    //   country: 'Belarus',
    //   city: 'Minsk',
    //   address: 'Kuprevicha 3',
    //   status: 'cancelled',
    // },
    // {
    //   place: '12K',
    //   logo:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
    //   name: 'Vova Vovich',
    //   date: '12.02.2020',
    //   country: 'Belarus',
    //   city: 'Minsk',
    //   address: 'Kuprevicha 3',
    //   status: 'completed',
    // },
    // {
    //   place: '12K',
    //   logo:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
    //   name: 'Vova Vovich',
    //   date: '12.02.2020',
    //   country: 'Belarus',
    //   city: 'Minsk',
    //   address: 'Kuprevicha 3',
    //   status: 'cancelled',
    // },
    // {
    //   place: '12A',
    //   logo:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
    //   name: 'Vova Vovich',
    //   date: '12.02.2020',
    //   country: 'Belarus',
    //   city: 'Minsk',
    //   address: 'Kuprevicha 3',
    //   status: 'active',
    // },
    // {
    //   place: '12K',
    //   logo:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOiKAvPAHNVVf34rc06yJAI8u9U-RWbOGxNPaRkelU2FwkubUnFkh5qHTmvPlkfA98E37FCd6wYIUS_njo6YMhqDUC1Gqv&usqp=CAU',
    //   name: 'Vova Vovich',
    //   date: '12.02.2020',
    //   country: 'Belarus',
    //   city: 'Minsk',
    //   address: 'Kuprevicha 3',
    //   status: 'completed',
    // },
  ];

  constructor(private columnService: EmployeesBookingsColumnService) {}

  getData(status: string) {
    return this.DATA.filter((item) => item.status === status);
  }

  getColumns(status: string): Column[] {
    return this.columnService.getColumns(status);
  }
}
