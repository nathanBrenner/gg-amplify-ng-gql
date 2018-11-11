import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import components from './components';
import { AuthRoutingModule } from './auth-routing.module';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AmplifyAngularModule,
    MatToolbarModule,
  ],
  providers: [
    AmplifyService,
  ]
})
export class AuthModule { }
