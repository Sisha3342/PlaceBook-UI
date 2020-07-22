import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-size-tool',
  templateUrl: './size-tool.component.html',
  styleUrls: ['./size-tool.component.scss'],
})
export class SizeToolComponent implements OnInit {
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
