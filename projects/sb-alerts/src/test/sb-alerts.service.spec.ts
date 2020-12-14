import { TestBed } from '@angular/core/testing';
import { SbAlertsService } from '../public-api';
import { MockAlert } from './mock-alert';


describe('SbAlertsService', () => {
  let service: SbAlertsService;
  let mockAlert: MockAlert;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbAlertsService);
    mockAlert = new MockAlert();
    service.addAlert(mockAlert);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
