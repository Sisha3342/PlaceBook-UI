import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
})
export class DateRangeComponent implements OnInit, AfterViewInit {
  @Output() dateChange = new EventEmitter<FormGroup>();

  bookingDate = {
    start: new Date(),
    end: new Date(),
  };

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {
    this.bookingDate.start.setDate(new Date().getDate() + 1);
    this.bookingDate.end.setDate(new Date().getDate() + 1);
  }

  dateRangeChange(): void {
    this.range.value.start.setHours(0, 0, 0);
    this.range.value.end.setHours(23, 59, 59);
    this.dateChange.emit(this.range);
  }

  ngAfterViewInit(): void {
    this.dateRangeChange();
  }
}
