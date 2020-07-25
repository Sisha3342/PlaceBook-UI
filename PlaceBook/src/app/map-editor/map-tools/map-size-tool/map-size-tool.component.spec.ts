import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSizeToolComponent } from './map-size-tool.component';

describe('MapSizeToolComponent', () => {
  let component: MapSizeToolComponent;
  let fixture: ComponentFixture<MapSizeToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapSizeToolComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSizeToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
