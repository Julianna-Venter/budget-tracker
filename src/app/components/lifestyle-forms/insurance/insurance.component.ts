import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-insurance',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.scss',
})
export class InsuranceComponent {
  @Input() budgetForm!: FormGroup;

  ngOnInit(): void {
    this.budgetForm.addControl(
      'insurance',
      new FormGroup({
        longTerm: new FormControl(),
        shortTerm: new FormControl(),
      })
    );
  }
}
