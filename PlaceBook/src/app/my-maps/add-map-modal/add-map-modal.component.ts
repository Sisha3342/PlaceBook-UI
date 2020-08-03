import { MapService } from './add-map.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Office } from 'src/app/models/office';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-map-modal',
  templateUrl: './add-map-modal.component.html',
  styleUrls: ['./add-map-modal.component.scss'],
})
export class AddMapModalComponent implements OnInit {
  formData: Office;

  constructor(
    public dialogRef: MatDialogRef<AddMapModalComponent>,
    public dialog: MatDialog,
    public service: MapService,
    private route: Router
  ) {}

  resetForm(): void {
    this.formData = {
      id: null,
      address: {
        country: '',
        city: '',
        address: '',
      },
      worktimeStart: '',
      worktimeEnd: '',
      deleted: false,
    };
  }

  onSubmit(form: NgForm): void {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm): void {
    this.service.postOffice(form.value).subscribe((office) => {
      this.resetForm();

      this.dialogRef.close();
      this.route.navigate(['/editor', office.id]);
    });
  }

  ngOnInit(): void {
    this.resetForm();
  }
}
