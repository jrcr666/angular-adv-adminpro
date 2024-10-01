import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncrementerComponent } from './incrementer.component';

@NgModule({
  declarations: [
    IncrementerComponent
  ],
  exports: [
    IncrementerComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class ComponentsModule { }
