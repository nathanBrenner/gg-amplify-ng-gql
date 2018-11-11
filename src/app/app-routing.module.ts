import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'givers', loadChildren: './giver/giver.module#GiverModule' },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: '**', redirectTo: '/givers' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
