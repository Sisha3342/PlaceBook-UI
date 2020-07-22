import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rate-place',
  templateUrl: './rate-place.component.html',
  styleUrls: ['./rate-place.component.scss'],
})
export class RatePlaceComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
}
