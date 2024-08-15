import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-debit-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './debit-orders.component.html',
  styleUrl: './debit-orders.component.scss',
})
export class DebitOrdersComponent {
  @Input() budgetForm!: FormGroup;

  ngOnInit(): void {
    this.budgetForm.addControl(
      'debitOrders',
      new FormGroup({
        entertainment: new FormControl(),
        carPayments: new FormControl(),
        health: new FormControl(),
        banking: new FormControl(),
        subscriptions: new FormControl(),
      })
    );
  }
}
