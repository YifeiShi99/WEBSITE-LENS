import { TestBed } from '@angular/core/testing';

import { LandscapeImageService } from './landscape-image.service';

describe('LandscapeImageService', () => {
  let service: LandscapeImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandscapeImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
