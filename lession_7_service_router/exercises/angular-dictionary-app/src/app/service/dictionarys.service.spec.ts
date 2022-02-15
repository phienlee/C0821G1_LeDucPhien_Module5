import { TestBed } from '@angular/core/testing';

import { DictionarysService } from './dictionarys.service';

describe('DictionarysService', () => {
  let service: DictionarysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionarysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
