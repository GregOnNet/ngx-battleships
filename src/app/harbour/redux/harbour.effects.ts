import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HarbourActions, HarbourActionTypes } from './harbour.actions';

@Injectable()
export class HarbourEffects {

  @Effect()
  effect$ = this.actions$.ofType(HarbourActionTypes.SelectWarshipPlan);

  constructor(private actions$: Actions) {}
}
