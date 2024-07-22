import { TestBed } from '@angular/core/testing';

import { MafsService } from './mafs.service';

describe('MafsService', () => {
  let service: MafsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MafsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
