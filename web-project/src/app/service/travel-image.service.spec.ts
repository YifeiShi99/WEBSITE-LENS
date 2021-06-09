import { TestBed } from '@angular/core/testing';

import { TravelImageService } from './travel-image.service';

describe('TravelImageService', () => {
  let service: TravelImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
