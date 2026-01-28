import { Component } from '@angular/core';
import { CreateTransactionsService } from '../../services/create-transactions/create-transactions.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
 amount: number = 0;

 constructor(private createTransactionsService: CreateTransactionsService) {
   this.amount = createTransactionsService.calculateAmount([22.34, 67.89, 110.89, 10]);
 }
}
