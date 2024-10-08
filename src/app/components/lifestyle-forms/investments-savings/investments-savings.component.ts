import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-investments-savings',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './investments-savings.component.html',
  styleUrl: './investments-savings.component.scss',
})
export class InvestmentsSavingsComponent {
  @Input() budgetForm!: FormGroup;

  ngOnInit(): void {
    this.budgetForm.addControl(
      'investments',
      new FormGroup({
        longTerm: new FormControl(),
        shortTerm: new FormControl(),
      })
    );
  }
}
