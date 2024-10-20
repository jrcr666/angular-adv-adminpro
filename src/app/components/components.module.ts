import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule  } from 'ng2-charts';

import { IncrementerComponent } from './incrementer.component';
import { DoughnutComponent } from './doughnut/doughnut.component';

@NgModule({
  declarations: [
    IncrementerComponent,
    DoughnutComponent
  ],
  exports: [
    IncrementerComponent,
    DoughnutComponent
  ],
  imports: [
    NgChartsModule,
    FormsModule,
    CommonModule
  ]
})
export class ComponentsModule { }
