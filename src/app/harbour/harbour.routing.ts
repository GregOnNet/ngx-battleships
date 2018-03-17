import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HarbourComponent } from './harbour.component';

const routes: Route[] = [
  { path: '', component: HarbourComponent , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HarbourRouting {}
