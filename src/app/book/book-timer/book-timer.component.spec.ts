import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTimerComponent } from './book-timer.component';

describe('BookTimerComponent', () => {
  let component: BookTimerComponent;
  let fixture: ComponentFixture<BookTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookTimerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
