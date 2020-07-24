import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { MapObject } from '../map-model/map-object';
import { MapEditorService } from '../map-editor.service';

@Component({
  selector: 'app-map-object',
  templateUrl: './map-object.component.html',
  styleUrls: ['./map-object.component.scss'],
})
export class MapObjectComponent implements OnInit {
  @Input() object: MapObject;
  @Input() isOnMap;
  menuOpened = false;

  constructor(
    public editorService: MapEditorService,
    private eRef: ElementRef
  ) {}

  ngOnInit(): void {}

  @HostListener('document:mouseup', ['$event'])
  clickOut($event) {
    console.log($event);
    if (
      $event.button === 2 &&
      this.eRef.nativeElement.contains($event.target)
    ) {
      this.menuOpened = true;
    } else {
      this.menuOpened = false;
      $event.stopPropagation();
    }
  }
}
