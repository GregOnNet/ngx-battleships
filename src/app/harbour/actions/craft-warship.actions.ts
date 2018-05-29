import { Action } from '@ngrx/store';

import {
  BattleFieldPosition,
  IProvideWarshipPlan
} from '../../lib/battleships/contracts';

export enum CraftWarshipActionTypes {
  RecoverWarshipPlan = '[Harbour] Recover Cached Warship Plan',
  NoWarshipPlanToRecover = '[Harbour] There is no Warship to recover',
  RecoverWarshipPlanSuccess = '[Harbour] Recover Cached Warship Plan Success',
  ChooseWarshipPlanSuccess = '[Harbour] Choose Warship Plan Success',
  ChooseWarshipPlan = '[Harbour] Choose Warship Plan'
}

export class RecoverWarshipPlan implements Action {
  readonly type = CraftWarshipActionTypes.RecoverWarshipPlan;
}

export class NoWarshipPlanToRecover implements Action {
  readonly type = CraftWarshipActionTypes.NoWarshipPlanToRecover;
}

export class RecoverWarshipPlanSuccess implements Action {
  readonly type = CraftWarshipActionTypes.RecoverWarshipPlanSuccess;

  constructor(public payload: IProvideWarshipPlan) {}
}

export class ChooseWarshipPlan implements Action {
  readonly type = CraftWarshipActionTypes.ChooseWarshipPlan;

  constructor(public payload: IProvideWarshipPlan) {}
}

export class ChooseWarshipPlanSuccess implements Action {
  readonly type = CraftWarshipActionTypes.ChooseWarshipPlanSuccess;

  constructor(public payload: IProvideWarshipPlan) {}
}

export type CraftWarshipActions =
  | ChooseWarshipPlan
  | NoWarshipPlanToRecover
  | ChooseWarshipPlanSuccess
  | RecoverWarshipPlan
  | RecoverWarshipPlanSuccess;
