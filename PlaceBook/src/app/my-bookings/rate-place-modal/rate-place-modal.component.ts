import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookingMark } from '../../models/booking-mark';
import { RateService } from './rate.service';

@Component({
  selector: 'app-rate-place-modal',
  templateUrl: './rate-place-modal.component.html',
  styleUrls: ['./rate-place-modal.component.scss'],
})
export class RatePlaceModalComponent {
  bookingMark: BookingMark = {
    markLightning: 1,
    markAir: 1,
    markVolume: 1,
    markCleaning: 1,
    markLocation: 1,
    feedback: '',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private rateService: RateService
  ) {}

  changeFeedback($event: KeyboardEvent): void {
    this.bookingMark.feedback = ($event.target as HTMLInputElement).value;
  }

  ratePlace(): void {
    this.rateService.ratePlace(this.data.booking.id, this.bookingMark);
  }
}
