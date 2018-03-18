import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HarbourActions, HarbourActionTypes } from '../actions/harbour.actions';

@Injectable()
export class HarbourEffects {

  @Effect()
  effect$ = this.actions$.ofType(HarbourActionTypes.HarbourAction);

  constructor(private actions$: Actions) {}
}
