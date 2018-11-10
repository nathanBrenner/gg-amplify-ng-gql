import { TestBed } from '@angular/core/testing';

import { GiverService } from './giver.service';

describe('GiverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiverService = TestBed.get(GiverService);
    expect(service).toBeTruthy();
  });
});
