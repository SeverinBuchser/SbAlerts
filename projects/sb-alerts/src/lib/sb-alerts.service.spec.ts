import { TestBed } from '@angular/core/testing';

import { SbAlertsService } from './sb-alerts.service';

describe('SbAlertsService', () => {
  let service: SbAlertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbAlertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
