import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulReservationComponent } from './successful-reservation.component';

describe('SuccessfulReservationComponent', () => {
  let component: SuccessfulReservationComponent;
  let fixture: ComponentFixture<SuccessfulReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
