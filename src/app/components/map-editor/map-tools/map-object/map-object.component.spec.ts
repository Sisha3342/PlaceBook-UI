import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapObjectComponent } from './map-object.component';

describe('MapToolsComponent', () => {
  let component: MapObjectComponent;
  let fixture: ComponentFixture<MapObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapObjectComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
