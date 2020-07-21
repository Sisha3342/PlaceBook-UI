import { AppMaterialModule } from './../app-material/app-material.module';
import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from '../employees/employee-card/employee.class';

@Component({
  selector: 'app-modal-dialog-dialog',
  templateUrl: 'modal-dialog-details.component.html',
})
export class ModalDialogComponent {
  employee: Employee;
}
