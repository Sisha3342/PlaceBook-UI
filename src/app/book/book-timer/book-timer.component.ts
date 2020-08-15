import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-book-timer',
  templateUrl: './book-timer.component.html',
  styleUrls: ['./book-timer.component.scss'],
})
export class BookTimerComponent implements OnInit {
  @Input() timerValue;
  @Output() timerValueChange = new EventEmitter<number>();
  @Output() stopBooking = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    timer(0, 1000).subscribe(() => {
      this.timerValue -= 1;

      if (!this.timerValue) {
        this.stopBooking.emit();
      }

      this.timerValueChange.emit(this.timerValue);
    });
  }
}
