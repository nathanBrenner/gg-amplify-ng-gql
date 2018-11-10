import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSnackBarModule,
  MatIconModule,
} from '@angular/material';

import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';

import { GiverRoutingModule } from './giver-routing.module';

import GiversComponents from './components';
import Services from './services';

@NgModule({
  declarations: [
    ...GiversComponents
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormModule,
    GiverRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  providers: [
    ...Services,
  ]
})
export class GiverModule { }
