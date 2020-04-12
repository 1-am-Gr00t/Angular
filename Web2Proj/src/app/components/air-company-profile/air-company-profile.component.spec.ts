import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirCompanyProfileComponent } from './air-company-profile.component';

describe('AirCompanyProfileComponent', () => {
  let component: AirCompanyProfileComponent;
  let fixture: ComponentFixture<AirCompanyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirCompanyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirCompanyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
