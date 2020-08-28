import { TestBed } from '@angular/core/testing';

import { IntegerIdService } from './integer-id.service';

describe('IntegerIdService', () => {
  let service: IntegerIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegerIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
