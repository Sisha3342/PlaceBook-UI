import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeToolComponent } from './scope-tool.component';

describe('ScopeToolComponent', () => {
  let component: ScopeToolComponent;
  let fixture: ComponentFixture<ScopeToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScopeToolComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopeToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
