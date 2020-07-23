import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent implements OnInit {
  @Input() icon: string;
  @Input() iconTooltip: string;

  public rate = 1;

  constructor() {}

  ngOnInit(): void {}

  changeRate(i: number): void {
    this.rate = i;
  }
}
