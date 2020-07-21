import { Component, OnInit } from '@angular/core';
import { OBJECTS } from './model/objects';

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.scss'],
})
export class MapEditorComponent implements OnInit {
  objects = OBJECTS;

  ngOnInit(): void {}
}
