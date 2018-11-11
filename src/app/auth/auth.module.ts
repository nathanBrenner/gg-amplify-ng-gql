import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { MatToolbarModule } from '@angular/material';

import { AuthComponent } from './components/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthComponent],
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
