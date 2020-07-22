import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map-size-tool',
  templateUrl: './map-size-tool.component.html',
  styleUrls: ['./map-size-tool.component.scss'],
})
export class MapSizeToolComponent implements OnInit {
  @Input() width: number;
  @Input() height: number;
  @Output() changeHeightEvent = new EventEmitter<number>();
  @Output() changeWidthEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  changeWidth(): void {
    this.changeWidthEvent.emit(this.width);
  }

  changeHeight(): void {
    this.changeHeightEvent.emit(this.height);
  }
}
