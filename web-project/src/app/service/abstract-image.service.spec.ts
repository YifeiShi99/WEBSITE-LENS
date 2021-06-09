import { TestBed } from '@angular/core/testing';

import { AbstractImageService } from './abstract-image.service';

describe('AbstractImageService', () => {
  let service: AbstractImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
