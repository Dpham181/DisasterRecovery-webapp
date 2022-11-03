import { TestBed } from '@angular/core/testing';

import { RouteGGuard } from './route-g.guard';

describe('RouteGGuard', () => {
  let guard: RouteGGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteGGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
