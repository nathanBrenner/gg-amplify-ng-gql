import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import components from './components';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
  ]
})
export class HomeModule { }
