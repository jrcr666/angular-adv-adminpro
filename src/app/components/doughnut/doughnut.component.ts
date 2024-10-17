import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: ``
})
export class DoughnutComponent implements OnInit{
  @Input() title: string = 'Sin título';
  @Input() labels: Array<string> = ['Label1', 'Label2', 'Label3'];
  @Input() colors: Array<string> = [];
  @Input() data: Array<number> = [
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
    Math.floor(Math.random()*100),
  ];

  public doughnutChartLabels: Array<string> = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };

  ngOnInit(): void {
    this.doughnutChartLabels = this.labels;
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: this.data,
          ...(this.colors.length ? {backgroundColor: this.colors} : {})
        },
      ],
    }
  }
}
