import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-deductions',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './personal-deductions.component.html',
  styleUrl: './personal-deductions.component.scss',
})
export class PersonalDeductionsComponent {
  @Input() budgetForm!: FormGroup;

  ngOnInit(): void {
    this.budgetForm.addControl(
      'peronalDeductions',
      new FormGroup({
        groceries: new FormControl(),
        petrol: new FormControl(),
        bigPurchases: new FormControl(),
        emergencyFund: new FormControl(),
        pet: new FormControl(),
      })
    );
  }
}
