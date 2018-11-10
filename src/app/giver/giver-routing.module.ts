import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiverComponent } from './components/giver/giver.component';

const routes: Routes = [
  { path: '', component: GiverComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiverRoutingModule { }
