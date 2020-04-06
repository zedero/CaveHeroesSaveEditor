import { TestBed } from '@angular/core/testing';

import { DataCompressService } from './data-compress.service';

describe('DataCompressService', () => {
  let service: DataCompressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCompressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
