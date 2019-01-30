import { TestBed } from '@angular/core/testing';

import { HomeAdminService } from './home-admin.service';

describe('HomeAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeAdminService = TestBed.get(HomeAdminService);
    expect(service).toBeTruthy();
  });
});
