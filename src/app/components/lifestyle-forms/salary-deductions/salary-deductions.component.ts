import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-salary-deductions',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './salary-deductions.component.html',
  styleUrl: './salary-deductions.component.scss',
})
export class SalaryDeductionsComponent {
  @Input() budgetForm!: FormGroup;

  ngOnInit(): void {
    this.budgetForm.addControl(
      'salaryDeductions',
      new FormGroup({
        taxAmount: new FormControl(),
        unemployment: new FormControl(),
        medicalAid: new FormControl(),
        retirement: new FormControl(),
      })
    );
  }
}
