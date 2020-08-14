import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-book-timer',
  templateUrl: './book-timer.component.html',
  styleUrls: ['./book-timer.component.scss'],
})
export class BookTimerComponent implements OnInit {
  startTimerValue = 5;
  currentTimerValue = this.startTimerValue;

  @Output() stopBooking = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    timer(0, 1000).subscribe((value) => {
      this.currentTimerValue = this.startTimerValue - value;

      if (!this.currentTimerValue) {
        this.stopBooking.emit();
      }
    });
  }
}
