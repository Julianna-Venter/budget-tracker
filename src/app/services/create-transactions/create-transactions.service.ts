import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateTransactionsService {

  constructor() { }

  public calculateAmount(transactions: number[]): number {
    let amount = 0;
    transactions.forEach(transaction => {
      amount +=
        (transaction % 10 === 0
          ? transaction + 10
          : Math.ceil(transaction / 10) * 10) - transaction;
    });

    return amount;
  }
}
