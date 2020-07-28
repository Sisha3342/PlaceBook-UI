import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rate-place-modal',
  templateUrl: './rate-place-modal.component.html',
  styleUrls: ['./rate-place-modal.component.scss'],
})
export class RatePlaceModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}
}
