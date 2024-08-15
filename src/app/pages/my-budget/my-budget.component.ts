import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IncomeComponent } from '../../components/lifestyle-forms/income/income.component';
import { SalaryDeductionsComponent } from '../../components/lifestyle-forms/salary-deductions/salary-deductions.component';

@Component({
  selector: 'app-my-budget',
  standalone: true,
  imports: [ReactiveFormsModule, IncomeComponent, SalaryDeductionsComponent],
  templateUrl: './my-budget.component.html',
  styleUrl: './my-budget.component.scss',
})
export class MyBudgetComponent {
  budgetForm: FormGroup;

  constructor() {
    this.budgetForm = new FormGroup({});
  }

  onSubmit() {}

  processValue = (value: any): number => {
    if (typeof value === 'string') {
      return parseFloat(value.replace(/\s+/g, '').replace(/,/g, '')) || 0;
    }
    return value || 0;
  };
}
