import { TestBed } from '@angular/core/testing';

import { CreateTransactionsService } from './create-transactions.service';

describe('CreateTransactionsService', () => {
  let service: CreateTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
