import { Action } from '@ngrx/store';
import {
  IProvideWarshipPlan,
  BattleFieldPosition
} from '../../lib/battleships/contracts';

export enum HarbourActionTypes {
  HarbourAction = '[Harbour] Action',
  ChooseWarshipPlan = '[Harbour] Choose Warship Plan',
  ChooseWarshipPlanSuccess = '[Harbour] Choose Warship Plan Success',
  DeclareMissionTarget = '[Harbour] Declare Mission Target',
  DeclareMissionTargetSucess = '[Harbour] Declare Mission Target Sucess',
  RecoverWarshipPlan = '[Harbour] Recover Warship Plan from Local Storage',
  RecoverWarshipPlanSucess = '[Harbour] Recover Warship Plan Sucess'
}

export class RecoverWarshipPlan implements Action {
  readonly type = HarbourActionTypes.RecoverWarshipPlan;
}

export class RecoverWarshipPlanSuccess implements Action {
  readonly type = HarbourActionTypes.RecoverWarshipPlanSucess;

  constructor(public payload: IProvideWarshipPlan) {}
}

/**
 * {
 *   type: 'asldjasd'
 *   payload: {T}
 * }
 */
export class ChooseWarshipPlan implements Action {
  readonly type = HarbourActionTypes.ChooseWarshipPlan;

  constructor(public payload: IProvideWarshipPlan) {}
}

export class ChooseWarshipPlanSuccess implements Action {
  readonly type = HarbourActionTypes.ChooseWarshipPlanSuccess;

  constructor(public payload: IProvideWarshipPlan) {}
}

export class DeclareMissionTargetSuccess implements Action {
  readonly type = HarbourActionTypes.DeclareMissionTargetSucess;

  constructor(public payload: BattleFieldPosition[]) {}
}

export class DeclareMissionTarget implements Action {
  readonly type = HarbourActionTypes.DeclareMissionTarget;

  constructor(public payload: BattleFieldPosition[]) {}
}

export type HarbourActions =
  | RecoverWarshipPlan
  | RecoverWarshipPlanSuccess
  | ChooseWarshipPlan
  | ChooseWarshipPlanSuccess
  | DeclareMissionTarget
  | DeclareMissionTargetSuccess;
