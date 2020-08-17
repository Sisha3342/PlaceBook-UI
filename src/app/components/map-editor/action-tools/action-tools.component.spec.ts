import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionToolsComponent } from './action-tools.component';

describe('ActionToolsComponent', () => {
  let component: ActionToolsComponent;
  let fixture: ComponentFixture<ActionToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionToolsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
