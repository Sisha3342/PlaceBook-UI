import { Component, Inject} from '@angular/core';
import { Employee } from '../employees/employee-card/employee.class';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Booking } from '../models/booking';

@Component({
  selector: 'app-modal-dialog-details',
  templateUrl: 'modal-dialog-details.component.html',
  styleUrls: ['./modal-dialog-details.component.scss'],
})
export class ModalDialogDetailsComponent {
  booking: Booking;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Booking) {
    this.booking = this.data;
  }

  employee: Employee;
}
