import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsSelectorComponent } from './maps-search.component';

describe('MapsSelectorComponent', () => {
  let component: MapsSelectorComponent;
  let fixture: ComponentFixture<MapsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapsSelectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
