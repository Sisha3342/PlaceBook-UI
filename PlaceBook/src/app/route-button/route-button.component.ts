import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-route-button',
  templateUrl: './route-button.component.html',
  styleUrls: ['./route-button.component.less']
})
export class RouteButtonComponent implements OnInit {
  @Input() name: string;
  @Input() iconType: string;
  @Input() setType: string;

  constructor() { }

  ngOnInit(): void { }

}
