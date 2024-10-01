import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  public counter: number = 10;
  public counter2: number = 70;

  get getPercentage1() {
    return  this.counter + '%';
  }

  get getPercentage2() {
    return  this.counter2 + '%';
  }

  changecounter1(value: number) {
    this.counter = value;
  }

  changecounter2(value: number) {
    this.counter2 = value;
  }
}
