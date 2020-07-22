import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zoom-tool',
  templateUrl: './zoom-tool.component.html',
  styleUrls: ['./zoom-tool.component.scss'],
})
export class ZoomToolComponent implements OnInit {
  @Output() scopeEvent = new EventEmitter<number>();
  scope = 1;
  scopeChange = 0.25;

  constructor() {}

  ngOnInit(): void {}

  decrease(): void {
    if (this.scope > 0.25) {
      this.scope -= this.scopeChange;

      this.scopeEvent.emit(this.scope);
    }
  }

  increase(): void {
    if (this.scope < 2) {
      this.scope += this.scopeChange;

      this.scopeEvent.emit(this.scope);
    }
  }

  reset(): void {
    this.scope = 1;
    this.scopeEvent.emit(this.scope);
  }
}
