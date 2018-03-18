import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { IProvideWarshipPlan } from '../../lib/battleships/contracts';
import { LocalStorage } from '../../lib/local-storage';
import {
  ChooseWarshipPlan,
  ChooseWarshipPlanSuccess,
  DeclareMissionTarget,
  DeclareMissionTargetSuccess,
  HarbourActionTypes,
  RecoverWarshipPlanSuccess
} from '../actions/harbour.actions';

@Injectable()
export class HarbourEffects {
  @Effect()
  chooseWarshipPlan$ = this.actions$.pipe(
    ofType(HarbourActionTypes.ChooseWarshipPlan),
    switchMap((action: ChooseWarshipPlan) =>
      this._storage
        .set('current-plan', action.payload)
        .pipe(map(warshipPlan => new ChooseWarshipPlanSuccess(warshipPlan)))
    )
  );

  @Effect()
  declareMissionTarget$ = this.actions$.pipe(
    ofType(HarbourActionTypes.DeclareMissionTarget),
    switchMap((action: DeclareMissionTarget) =>
      this._storage
        .set('current-position', action.payload)
        .pipe(map(position => new DeclareMissionTargetSuccess(position)))
    )
  );

  @Effect()
  recoverWarshipPlan$ = this.actions$.pipe(
    ofType(HarbourActionTypes.RecoverWarshipPlan),
    switchMap(() =>
      this._storage
        .get<IProvideWarshipPlan>('current-plan')
        .pipe(map(plan => new RecoverWarshipPlanSuccess(plan)))
    )
  );

  constructor(private actions$: Actions, private _storage: LocalStorage) {}
}
