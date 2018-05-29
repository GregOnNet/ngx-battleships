import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { IProvideWarshipPlan } from '../../lib/battleships/contracts';
import { LocalStorage } from '../../lib/local-storage';
import {
  ChooseWarshipPlan,
  ChooseWarshipPlanSuccess,
  CraftWarshipActionTypes,
  RecoverWarshipPlan,
  RecoverWarshipPlanSuccess,
  NoWarshipPlanToRecover
} from '../actions';

@Injectable()
export class CraftWarshipEffects {
  @Effect()
  recoverWarshipPlan = this._actions$.pipe(
    ofType(CraftWarshipActionTypes.RecoverWarshipPlan),
    switchMap((action: RecoverWarshipPlan) =>
      this._storage
        .get<IProvideWarshipPlan>('current-plan')
        .pipe(map(warshipPlan => !!warshipPlan
          ? new RecoverWarshipPlanSuccess(warshipPlan)
          : new NoWarshipPlanToRecover()))
    )
  );

  @Effect()
  chooseWarshipPlan = this._actions$.pipe(
    ofType(CraftWarshipActionTypes.ChooseWarshipPlan),
    switchMap((action: ChooseWarshipPlan) =>
      this._storage
        .set('current-plan', action.payload)
        .pipe(map(warshipPlan => new ChooseWarshipPlanSuccess(warshipPlan)))
    )
  );

  constructor(private _actions$: Actions, private _storage: LocalStorage) {}
}
