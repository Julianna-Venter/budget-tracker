import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-household-expenses',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './household-expenses.component.html',
  styleUrl: './household-expenses.component.scss',
})
export class HouseholdExpensesComponent {
  @Input() budgetForm!: FormGroup;

  ngOnInit(): void {
    this.budgetForm.addControl(
      'householdExpenses',
      new FormGroup({
        medicalAid: new FormControl(),
        rent: new FormControl(),
        electricityAndAll: new FormControl(),
      })
    );
  }
}
