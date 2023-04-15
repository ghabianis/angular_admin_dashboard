import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';




@Component({
  selector: 'app-chartj',
  templateUrl: './chartj.component.html',
  styleUrls: ['./chartj.component.css']
})
export class ChartjComponent {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40,80, 81, 56, 55, 40 ], label: 'Attendance' },
      { data: [ 28, 48, 40, 19, 86, 27, 90,80, 81, 56, 55, 40 ], label: 'Vacation' },
      { data: [ 28, 48, 40, 19, 86, 27, 90,80, 81, 56, 55, 40 ], label: 'Absence' }

    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
  

  


  
  constructor(){}  
  
}