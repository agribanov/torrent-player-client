import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

import homeRoutes from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    homeRoutes
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
