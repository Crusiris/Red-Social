import { TestBed } from '@angular/core/testing';

import { NaturalizateService } from './naturalizate.service';

describe('NaturalizateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NaturalizateService = TestBed.get(NaturalizateService);
    expect(service).toBeTruthy();
  });
});
