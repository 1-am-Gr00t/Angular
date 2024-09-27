import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RACAdminProfileComponent } from './rac-admin-profile.component';

describe('RACAdminProfileComponent', () => {
  let component: RACAdminProfileComponent;
  let fixture: ComponentFixture<RACAdminProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RACAdminProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RACAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
