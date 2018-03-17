import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


const routes: Route[] = [
  { path: '', redirectTo: '/harbour', pathMatch: 'full' },
  { path: 'harbour', loadChildren: './harbour/harbour.module#HarbourModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRouting {}
