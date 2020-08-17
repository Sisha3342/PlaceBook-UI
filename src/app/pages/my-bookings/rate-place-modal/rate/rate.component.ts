import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent {
  @Input() icon: string;
  @Input() iconTooltip: string;

  @Input() rate;
  @Output() rateChange = new EventEmitter<number>();

  constructor() {}

  changeRate(i: number): void {
    this.rate = i;

    this.rateChange.emit(this.rate);
  }
}
