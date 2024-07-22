import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { budgetModel } from '../../models/budget';

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
    // Ensure all form controls are initialized and have default values
    const formValues: Partial<budgetModel> = {
      ...this.budgetForm.value,
      taxPercentage: this.budgetForm.value.taxPercentage || 0,
    };

    // Define a complete budgetModel with default values
    const defaultBudget: budgetModel = {
      salary: formValues.salary ?? 0,
      otherIncome: formValues.otherIncome ?? 0,
      taxAmount: formValues.taxAmount ?? 0,
      taxPercentage: formValues.taxPercentage ?? 13.86,
      retirement: formValues.retirement ?? 0,
      unemployment: formValues.unemployment ?? 0,
      medicalAid: formValues.medicalAid ?? 0,
      insurance: formValues.insurance ?? 0,
      savings: formValues.savings ?? 0,
      investments: formValues.investments ?? 0,
      interest: formValues.interest ?? 0,
      emergency: formValues.emergency ?? 0,
      rent: formValues.rent ?? 0,
      electricity: formValues.electricity ?? 0,
      water: formValues.water ?? 0,
      groceries: formValues.groceries ?? 0,
      fuel: formValues.fuel ?? 0,
      pet: formValues.pet ?? 0,
      bigPurchases: formValues.bigPurchases ?? 0,
      carEmergencies: formValues.carEmergencies ?? 0,
      glasses: formValues.glasses ?? 0,
      clothes: formValues.clothes ?? 0,
      entertainment: formValues.entertainment ?? 0,
      subscriptions: formValues.subscriptions ?? 0,
    };

    // Convert the complete model to JSON
    const formValuesJson = JSON.stringify(defaultBudget);

    // Store the JSON string in localStorage
    localStorage.setItem('financialForm', formValuesJson);

    console.warn('Form values saved to localStorage:', formValuesJson);
  }
}
