import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    NavComponent
  ],
  declarations: [NavComponent]
})
export class NavModule { }
