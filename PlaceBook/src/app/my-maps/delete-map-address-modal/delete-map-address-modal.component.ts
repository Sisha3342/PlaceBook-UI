import { Component, OnInit } from '@angular/core';
import { Office } from '../../models/office';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MapService } from '../map.service';

@Component({
  selector: 'app-delete-map-address-modal',
  templateUrl: './delete-map-address-modal.component.html',
  styleUrls: ['./delete-map-address-modal.component.scss'],
})
export class DeleteMapAddressModalComponent implements OnInit {
  formData: Office;

  constructor(
    public dialogRef: MatDialogRef<DeleteMapAddressModalComponent>,
    public dialog: MatDialog,
    public service: MapService
  ) {}

  ngOnInit(): void {}

  onDeleteOfficeModal(): void {}
}
