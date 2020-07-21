import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from '../employees/employee-card/employee.class';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-modal-dialog-dialog',
  templateUrl: 'modal-dialog-details.component.html',
})
export class ModalDialogComponent {
  constructor(private dialogRef: MatDialogRef<ModalDialogComponent>) {}

  employee: Employee;

  close(): void {
    this.dialogRef.close();
  }
}
