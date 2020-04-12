import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegUserProfileComponent } from './reg-user-profile.component';

describe('RegUserProfileComponent', () => {
  let component: RegUserProfileComponent;
  let fixture: ComponentFixture<RegUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
