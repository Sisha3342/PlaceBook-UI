import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-map-size-tool',
  templateUrl: './map-size-tool.component.html',
  styleUrls: ['./map-size-tool.component.scss'],
})
export class MapSizeToolComponent implements OnInit {
  @Input() width: number;
  @Input() height: number;
  @Output() heightChange = new EventEmitter<number>();
  @Output() widthChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  changeWidth(): void {
    this.widthChange.emit(this.width);
  }

  changeHeight(): void {
    this.heightChange.emit(this.height);
  }
}
