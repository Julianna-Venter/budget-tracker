import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-other-expenses',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './other-expenses.component.html',
  styleUrl: './other-expenses.component.scss',
})
export class OtherExpensesComponent {
  @Input() budgetForm!: FormGroup;

  ngOnInit(): void {
    this.budgetForm.addControl(
      'otherDeductions',
      new FormGroup({
        glasses: new FormControl(),
        clothes: new FormControl(),
        vehicle: new FormControl(),
        otherName: new FormControl(''),
        otherValue: new FormControl(),
      })
    );
  }
}
