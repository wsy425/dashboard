import { TestBed } from '@angular/core/testing';

import { SensorInfoService } from './sensor-info.service';

describe('SensorInfoService', () => {
  let service: SensorInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SensorInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
