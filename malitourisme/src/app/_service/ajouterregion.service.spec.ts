import { TestBed } from '@angular/core/testing';

import { AjouterregionService } from './ajouterregion.service';

describe('AjouterregionService', () => {
  let service: AjouterregionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterregionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
