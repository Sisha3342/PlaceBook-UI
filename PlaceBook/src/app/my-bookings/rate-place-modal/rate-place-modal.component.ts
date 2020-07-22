import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rate-place-modal',
  templateUrl: './rate-place-modal.component.html',
  styleUrls: ['./rate-place-modal.component.scss'],
})
export class RatePlaceModalComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
}
