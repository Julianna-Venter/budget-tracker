import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-budget',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './my-budget.component.html',
  styleUrl: './my-budget.component.scss',
})
export class MyBudgetComponent {
  budgetForm = new FormGroup({
    salary: new FormControl(),
    otherIncome: new FormControl(),
    taxAmount: new FormControl(),
    taxPercentage: new FormControl(13.86),
    retirement: new FormControl(),
    unemployment: new FormControl(),
    medicalAid: new FormControl(),
    insurance: new FormControl(),
    savings: new FormControl(),
    investments: new FormControl(),
    interest: new FormControl(),
    emergency: new FormControl(),
    rent: new FormControl(),
    electricity: new FormControl(),
    water: new FormControl(),
    groceries: new FormControl(),
    fuel: new FormControl(),
    pet: new FormControl(),
    bigPurchases: new FormControl(),
    carEmergencies: new FormControl(),
    glasses: new FormControl(),
    clothes: new FormControl(),
    entertainment: new FormControl(),
    subscriptions: new FormControl(),
  });

  onSubmit() {
    console.warn(this.budgetForm.value);
  }
}
