import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PipesTestingPipe } from '../pipes-testing.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    PipesTestingPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent, PipesTestingPipe
  ]
})
export class PagesModule { }
