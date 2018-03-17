import { Action } from '@ngrx/store';

import {
  BattleFieldPosition,
  IProvideWarshipPlan
} from '../../lib/battleships/contracts';

export enum CraftWarshipActionTypes {
  ChooseWarshipPlanSuccess = '[Harbour] Choose Warhsip Plan Success',
  ChooseWarshipPlan = '[Harbour] Choose Warhsip Plan'
}

export class ChooseWarshipPlanSuccess implements Action {
  readonly type = CraftWarshipActionTypes.ChooseWarshipPlanSuccess;

  constructor(public payload: IProvideWarshipPlan) {}
}

export class ChooseWarshipPlan implements Action {
  readonly type = CraftWarshipActionTypes.ChooseWarshipPlan;

  constructor(public payload: IProvideWarshipPlan) {}
}

export type CraftWarshipActions = ChooseWarshipPlanSuccess | ChooseWarshipPlan;
