import { TestBed } from '@angular/core/testing';

import { ZoraService } from './zora.service';

describe('ZoraService', () => {
  let service: ZoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
