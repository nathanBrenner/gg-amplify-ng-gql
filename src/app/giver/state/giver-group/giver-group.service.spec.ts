import { TestBed } from '@angular/core/testing';

import { GiverGroupService } from './giver-group.service';

describe('GiverGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiverGroupService = TestBed.get(GiverGroupService);
    expect(service).toBeTruthy();
  });
});
