import { TestBed } from '@angular/core/testing';

import { HomeCommitteeService } from './home-committee.service';

describe('HomeCommitteeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeCommitteeService = TestBed.get(HomeCommitteeService);
    expect(service).toBeTruthy();
  });
});
