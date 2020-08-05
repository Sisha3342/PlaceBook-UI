import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomToolComponent } from './zoom-tool.component';

describe('ZoomToolComponent', () => {
  let component: ZoomToolComponent;
  let fixture: ComponentFixture<ZoomToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomToolComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
