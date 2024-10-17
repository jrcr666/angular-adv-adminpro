import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``
})
export class Grafica1Component {
  public labels1: Array<string> = [
    'Birra',
    'Comida',
    'pan',
  ];
  public data1: Array<number> = [200, 50, 10]
  public colors1: Array<string> = ['#6857E6', '#009FEE', '#F02059'];

}
