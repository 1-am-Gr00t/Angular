import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSeatComponent } from './choose-seat.component';

describe('ChooseSeatComponent', () => {
  let component: ChooseSeatComponent;
  let fixture: ComponentFixture<ChooseSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
