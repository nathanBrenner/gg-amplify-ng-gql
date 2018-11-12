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

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';

import { GiversComponent } from './components/givers/givers/givers.component';
import { GiverListComponent } from './components/givers/giver-list/giver-list.component';
import { GiverFormComponent } from './components/givers/giver-form/giver-form.component';
import { GiverGroupsComponent } from './components/giver-groups/giver-groups/giver-groups.component';
import { GiverGroupListComponent } from './components/giver-groups/giver-group-list/giver-group-list.component';
import { GiverGroupFormComponent } from './components/giver-groups/giver-group-form/giver-group-form.component';
import { GiverGroupComponent } from './components/giver-groups/giver-group/giver-group.component';
import { GiverComponent } from './components/giver/giver.component';
import { GiverService } from './state/giver/giver.service';
import { GiverGroupService } from './state/giver-group/giver-group.service';

import { GiverRoutingModule } from './giver-routing.module';

@NgModule({
  declarations: [
    GiverComponent,
    GiverGroupComponent,
    GiverGroupFormComponent,
    GiverGroupListComponent,
    GiverGroupsComponent,
    GiverFormComponent,
    GiverListComponent,
    GiversComponent,
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
    AmplifyAngularModule,
  ],
  providers: [
    GiverGroupService,
    GiverService,
    AmplifyService,
  ]
})
export class GiverModule { }
