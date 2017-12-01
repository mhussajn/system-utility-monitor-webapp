import { TestBed, inject } from '@angular/core/testing';

import { UsageDataService } from './usage-data.service';

describe('UsageDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsageDataService]
    });
  });

  it('should be created', inject([UsageDataService], (service: UsageDataService) => {
    expect(service).toBeTruthy();
  }));
});
