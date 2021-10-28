import { TestBed } from '@angular/core/testing';

import { InsuranceCar.ServiceService } from './insurance-car.service.service';

describe('InsuranceCar.ServiceService', () => {
  let service: InsuranceCar.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceCar.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
