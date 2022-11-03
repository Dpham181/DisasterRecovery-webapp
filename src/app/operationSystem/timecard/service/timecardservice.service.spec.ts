import { TestBed } from '@angular/core/testing';

import { TimecardserviceService } from './timecardservice.service';

describe('TimecardserviceService', () => {
  let service: TimecardserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimecardserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
