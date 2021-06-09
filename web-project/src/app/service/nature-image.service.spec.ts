import { TestBed } from '@angular/core/testing';

import { NatureImageService } from './nature-image.service';

describe('NatureImageService', () => {
  let service: NatureImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NatureImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
