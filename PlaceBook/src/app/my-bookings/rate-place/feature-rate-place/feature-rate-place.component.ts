import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-rate-place',
  templateUrl: './feature-rate-place.component.html',
  styleUrls: ['./feature-rate-place.component.scss'],
})
export class FeatureRatePlaceComponent implements OnInit {
  public rate = 0;

  constructor() {}

  ngOnInit(): void {}

  public toggleIcon(i: number): void {
    this.rate = i;
    console.log(this.rate);
  }
}
