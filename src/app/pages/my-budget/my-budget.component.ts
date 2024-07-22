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
      salary: this.processValue(formValues.salary),
      otherIncome: this.processValue(formValues.otherIncome),
      taxAmount: this.processValue(formValues.taxAmount),
      taxPercentage: this.processValue(formValues.taxPercentage) || 13.86,
      retirement: this.processValue(formValues.retirement),
      unemployment: this.processValue(formValues.unemployment),
      medicalAid: this.processValue(formValues.medicalAid),
      insurance: this.processValue(formValues.insurance),
      savings: this.processValue(formValues.savings),
      investments: this.processValue(formValues.investments),
      interest: this.processValue(formValues.interest),
      emergency: this.processValue(formValues.emergency),
      rent: this.processValue(formValues.rent),
      electricity: this.processValue(formValues.electricity),
      water: this.processValue(formValues.water),
      groceries: this.processValue(formValues.groceries),
      fuel: this.processValue(formValues.fuel),
      pet: this.processValue(formValues.pet),
      bigPurchases: this.processValue(formValues.bigPurchases),
      carEmergencies: this.processValue(formValues.carEmergencies),
      glasses: this.processValue(formValues.glasses),
      clothes: this.processValue(formValues.clothes),
      entertainment: this.processValue(formValues.entertainment),
      subscriptions: this.processValue(formValues.subscriptions),
    };

    // Convert the complete model to JSON
    const formValuesJson = JSON.stringify(defaultBudget);

    // Store the JSON string in localStorage
    localStorage.setItem('financialForm', formValuesJson);

    console.warn('Form values saved to localStorage:', formValuesJson);
  }

  processValue = (value: any): number => {
    // Check if value is a string
    if (typeof value === 'string') {
      // Remove spaces and commas (if needed) and convert to number
      return parseFloat(value.replace(/\s+/g, '').replace(/,/g, '')) || 0;
    }

    // Ensure value is a number or default to 0
    return value || 0;
  };
}
