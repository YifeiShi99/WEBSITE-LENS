import { TestBed } from '@angular/core/testing';

import { UrbanImageService } from './urban-image.service';

describe('UrbanImageService', () => {
  let service: UrbanImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrbanImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
