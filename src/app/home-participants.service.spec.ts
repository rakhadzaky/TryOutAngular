import { TestBed } from '@angular/core/testing';

import { HomeParticipantsService } from './home-participants.service';

describe('HomeParticipantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeParticipantsService = TestBed.get(HomeParticipantsService);
    expect(service).toBeTruthy();
  });
});
