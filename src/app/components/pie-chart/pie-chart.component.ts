import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent {
  data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  config = {
    type: 'doughnut',
    data: this.data,
  };

  constructor() {
    const element = document.getElementById(
      'acquisitions'
    ) as HTMLCanvasElement;
    if (element) {
      new Chart(element, {
        type: 'bar',
        data: {
          labels: this.data.map((row) => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: this.data.map((row) => row.count),
            },
          ],
        },
      });
    }
  }
}
