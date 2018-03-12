import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { BattlefieldActions, BattlefieldActionTypes } from './battlefield.actions';

@Injectable()
export class BattlefieldEffects {

  @Effect()
  effect$ = this.actions$.ofType(BattlefieldActionTypes.BattlefieldAction);

  constructor(private actions$: Actions) {}
}
