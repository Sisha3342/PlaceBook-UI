import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorPanelComponent } from './floor-panel.component';

describe('FloorPanelComponent', () => {
  let component: FloorPanelComponent;
  let fixture: ComponentFixture<FloorPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FloorPanelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
