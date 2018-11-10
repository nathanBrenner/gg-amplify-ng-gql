import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
} from '@angular/material';

import components from './components';
import services from './services';

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  providers: [ ...services ],
  exports: [...components]
})
export class DynamicFormModule { }
