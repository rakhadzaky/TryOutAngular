import { TestBed } from '@angular/core/testing';

import { TestComServicesService } from './test-com-services.service';

describe('TestComServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestComServicesService = TestBed.get(TestComServicesService);
    expect(service).toBeTruthy();
  });
});
