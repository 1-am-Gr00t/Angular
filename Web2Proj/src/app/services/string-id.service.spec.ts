import { TestBed } from '@angular/core/testing';

import { StringIdService } from './string-id.service';

describe('StringIdService', () => {
  let service: StringIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
