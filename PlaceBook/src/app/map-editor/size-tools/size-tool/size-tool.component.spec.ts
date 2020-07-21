import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeToolComponent } from './size-tool.component';

describe('SizeToolComponent', () => {
  let component: SizeToolComponent;
  let fixture: ComponentFixture<SizeToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SizeToolComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
