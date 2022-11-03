import { TestBed } from '@angular/core/testing';

import { MachineserviceService } from './machineservice.service';

describe('MachineserviceService', () => {
  let service: MachineserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
