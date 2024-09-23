import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DebitOrdersComponent } from '../../components/lifestyle-forms/debit-orders/debit-orders.component';
import { HouseholdExpensesComponent } from '../../components/lifestyle-forms/household-expenses/household-expenses.component';
import { IncomeComponent } from '../../components/lifestyle-forms/income/income.component';
import { InsuranceComponent } from '../../components/lifestyle-forms/insurance/insurance.component';
import { InvestmentsSavingsComponent } from '../../components/lifestyle-forms/investments-savings/investments-savings.component';
import { OtherExpensesComponent } from '../../components/lifestyle-forms/other-expenses/other-expenses.component';
import { PersonalDeductionsComponent } from '../../components/lifestyle-forms/personal-deductions/personal-deductions.component';
import { SalaryDeductionsComponent } from '../../components/lifestyle-forms/salary-deductions/salary-deductions.component';

@Component({
  selector: 'app-my-budget',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IncomeComponent,
    SalaryDeductionsComponent,
    HouseholdExpensesComponent,
    DebitOrdersComponent,
    PersonalDeductionsComponent,
    InvestmentsSavingsComponent,
    InsuranceComponent,
    OtherExpensesComponent,
  ],
  templateUrl: './my-budget.component.html',
  styleUrl: './my-budget.component.scss',
})
export class MyBudgetComponent {
  budgetForm: FormGroup;

  constructor() {
    this.budgetForm = new FormGroup({});
  }

  onSubmit() {
    this.saveFormGroupToLocalStorage(this.budgetForm);
  }

  private saveFormGroupToLocalStorage(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup) {
        this.saveFormGroupToLocalStorage(control);
      } else {
        localStorage.setItem(`${key}`, JSON.stringify(control?.value));
      }
    });
  }

  private setFormGroupValues(formGroup: FormGroup, values: any): void {
    Object.keys(values).forEach((key) => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup) {
        this.setFormGroupValues(control, values[key]);
      } else {
        control?.setValue(values[key]);
      }
    });
  }
}
