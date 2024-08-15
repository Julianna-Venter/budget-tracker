import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { budgetModel } from '../../models/budget';
import { MafsService } from '../../services/mafs.service';
import { PieChartComponent } from '../../components/pie-chart/pie-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe, PieChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  parsedValues!: Partial<budgetModel>;
  totalIncome: number = 0;
  totalExpenses: number = 0;
  totalSavings: number = 0;
  proportionList: number[] = [];
  leftOver: number = 0;
  entertainment: string[] = ['Netflix', 'Spotify'];
  subscriptions: string[] = ['Virgin Active', 'Mc Carthy'];
  groceryDivide: number = 48 * 3 * 4;

  constructor(private mafsService: MafsService) {
    const savedFormValues = localStorage.getItem('financialForm');

    if (savedFormValues) {
      this.parsedValues = JSON.parse(savedFormValues);

      const defaultBudget: budgetModel = {
        salary: parseFloat(this.parsedValues.salary as any) || 0,
        otherIncome: parseFloat(this.parsedValues.otherIncome as any) || 0,
        taxAmount: parseFloat(this.parsedValues.taxAmount as any) || 0,
        taxPercentage:
          parseFloat(this.parsedValues.taxPercentage as any) || 13.86,
        retirement: parseFloat(this.parsedValues.retirement as any) || 0,
        unemployment: parseFloat(this.parsedValues.unemployment as any) || 0,
        medicalAid: parseFloat(this.parsedValues.medicalAid as any) || 0,
        insurance: parseFloat(this.parsedValues.insurance as any) || 0,
        savings: parseFloat(this.parsedValues.savings as any) || 0,
        investments: parseFloat(this.parsedValues.investments as any) || 0,
        interest: parseFloat(this.parsedValues.interest as any) || 0,
        emergency: parseFloat(this.parsedValues.emergency as any) || 0,
        rent: parseFloat(this.parsedValues.rent as any) || 0,
        electricity: parseFloat(this.parsedValues.electricity as any) || 0,
        water: parseFloat(this.parsedValues.water as any) || 0,
        groceries: parseFloat(this.parsedValues.groceries as any) || 0,
        fuel: parseFloat(this.parsedValues.fuel as any) || 0,
        pet: parseFloat(this.parsedValues.pet as any) || 0,
        bigPurchases: parseFloat(this.parsedValues.bigPurchases as any) || 0,
        carEmergencies:
          parseFloat(this.parsedValues.carEmergencies as any) || 0,
        glasses: parseFloat(this.parsedValues.glasses as any) || 0,
        clothes: parseFloat(this.parsedValues.clothes as any) || 0,
        entertainment: parseFloat(this.parsedValues.entertainment as any) || 0,
        subscriptions: parseFloat(this.parsedValues.subscriptions as any) || 0,
      };

      this.totalIncome = this.mafsService.totalAmounts([
        defaultBudget.salary ?? 0,
        defaultBudget.otherIncome ?? 0,
      ]);

      this.totalExpenses = this.mafsService.totalAmounts([
        defaultBudget.rent ?? 0,
        defaultBudget.taxAmount ?? 0,
        defaultBudget.retirement ?? 0,
        defaultBudget.unemployment ?? 0,
        defaultBudget.medicalAid ?? 0,
        defaultBudget.insurance ?? 0,
        defaultBudget.electricity ?? 0,
        defaultBudget.water ?? 0,
        defaultBudget.groceries ?? 0,
        defaultBudget.fuel ?? 0,
        defaultBudget.pet ?? 0,
        defaultBudget.bigPurchases ?? 0,
        // defaultBudget.carEmergencies ?? 0,
        // defaultBudget.glasses ?? 0,
        // defaultBudget.clothes ?? 0,
        defaultBudget.entertainment ?? 0,
        defaultBudget.subscriptions ?? 0,
      ]);

      console.log(this.parsedValues);
      console.log(defaultBudget);

      this.totalSavings = this.mafsService.totalAmounts([
        defaultBudget.savings ?? 0,
        defaultBudget.investments ?? 0,
        defaultBudget.emergency ?? 0,
      ]);

      this.proportionList = this.mafsService.proportion([
        this.totalIncome,
        this.totalExpenses,
        this.totalSavings,
      ]);

      this.leftOver = this.mafsService.leftOver(
        [this.totalIncome],
        [this.totalExpenses, this.totalSavings]
      );
    }
  }
}
