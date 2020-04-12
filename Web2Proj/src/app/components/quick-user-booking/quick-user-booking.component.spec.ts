import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickUserBookingComponent } from './quick-user-booking.component';

describe('QuickUserBookingComponent', () => {
  let component: QuickUserBookingComponent;
  let fixture: ComponentFixture<QuickUserBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickUserBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickUserBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
