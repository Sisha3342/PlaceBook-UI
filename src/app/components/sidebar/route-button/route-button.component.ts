import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-route-button',
  templateUrl: './route-button.component.html',
  styleUrls: ['./route-button.component.scss'],
})
export class RouteButtonComponent {
  @Input() name: string;
  @Input() iconType: string;
  @Input() setType: string;
  @Input() isActive: boolean;

  constructor() {}
}
