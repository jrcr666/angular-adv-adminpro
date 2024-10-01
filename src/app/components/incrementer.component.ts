import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

const regExp = /^(0|[1-9][0-9]?|100)$/;

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: ``
})
export class IncrementerComponent {
  @Input() counter: number = 50;
  @Input('type') btnClass: string = 'primary';
  @Output() onChange = new EventEmitter<number>();
  @ViewChild('input') input : any; 

  increment() {
    (this.counter < 100) && this.onChange.emit(++this.counter);
  }
  decrement() {
    (this.counter > 0) && this.onChange.emit(--this.counter);
  }
  
  get buttonClass() {
   return 'btn-' + this.btnClass; 
  }

  changeInputValue(value: string) {
    value.match(regExp)
      ? this.onChange.emit(Number(value))
      : this.input.nativeElement.value = this.counter;
  }
}
