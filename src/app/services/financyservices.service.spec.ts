import { TestBed } from '@angular/core/testing';

import { FinancyservicesService } from './financyservices.service';

describe('FinancyservicesService', () => {
  let service: FinancyservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancyservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
