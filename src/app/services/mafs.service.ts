import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MafsService {
  constructor() {}

  totalAmounts(income: number[]): number {
    return parseFloat(income.reduce((a, b) => a + b, 0).toFixed(2));
  }

  proportion(items: number[]): number[] {
    return items.map((item) =>
      parseFloat(((item / this.totalAmounts(items)) * 100).toFixed(2))
    );
  }

  leftOver(income: number[], expenses: number[]): number {
    return parseFloat(
      (this.totalAmounts(income) - this.totalAmounts(expenses)).toFixed(2)
    );
  }
}
