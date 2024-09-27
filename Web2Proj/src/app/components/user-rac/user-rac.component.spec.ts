import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRacComponent } from './user-rac.component';

describe('UserRacComponent', () => {
  let component: UserRacComponent;
  let fixture: ComponentFixture<UserRacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
