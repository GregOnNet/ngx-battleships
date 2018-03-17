import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { LocalStorage } from '../../lib/local-storage';
import {
  ChooseWarshipPlanSuccess,
  CraftWarshipActionTypes,
  ChooseWarshipPlan
} from '../actions';

@Injectable()
export class CraftWarshipEffects {
  @Effect()
  storeWarshipPlan = this._actions$.pipe(
    ofType(CraftWarshipActionTypes.ChooseWarshipPlan),
    switchMap((action: ChooseWarshipPlan) =>
      this._storage
        .set('current-plan', action.payload)
        .pipe(map(warshipPlan => new ChooseWarshipPlanSuccess(warshipPlan)))
    )
  );

  constructor(private _actions$: Actions, private _storage: LocalStorage) {}
}
