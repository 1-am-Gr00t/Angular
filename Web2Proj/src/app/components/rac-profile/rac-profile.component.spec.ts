import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RACProfileComponent } from './rac-profile.component';

describe('RACProfileComponent', () => {
  let component: RACProfileComponent;
  let fixture: ComponentFixture<RACProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RACProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RACProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
