import { TestBed } from '@angular/core/testing';

import { DetailRegionsService } from './detail-regions.service';

describe('DetailRegionsService', () => {
  let service: DetailRegionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailRegionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
