import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'givers', loadChildren: './giver/giver.module#GiverModule' },
  { path: '', redirectTo: '/givers', pathMatch: 'full' },
  { path: '**', redirectTo: '/givers' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
