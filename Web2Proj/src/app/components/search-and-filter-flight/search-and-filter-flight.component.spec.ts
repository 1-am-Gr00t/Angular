import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndFilterFlightComponent } from './search-and-filter-flight.component';

describe('SearchAndFilterFlightComponent', () => {
  let component: SearchAndFilterFlightComponent;
  let fixture: ComponentFixture<SearchAndFilterFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAndFilterFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndFilterFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
