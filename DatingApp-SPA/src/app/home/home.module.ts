import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { RegisterModule } from '../register/register.module';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    RegisterModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ]
  
})
export class HomeModule {}
