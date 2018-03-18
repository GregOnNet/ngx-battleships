import { Action } from '@ngrx/store';
import { IProvideWarshipPlan, BattleFieldPosition } from '../../lib/battleships/contracts';

export enum HarbourActionTypes {
  HarbourAction = '[Harbour] Action',
  ChooseWarshipPlan = '[Harbour] Choose Warship Plan',
  DeclareMissionTarget = '[Harbour] Declare Mission Target'
}

export class Harbour implements Action {
  readonly type = HarbourActionTypes.HarbourAction;
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

export class DeclareMissionTarget implements Action {
  readonly type = HarbourActionTypes.DeclareMissionTarget;

  constructor(public payload: BattleFieldPosition[]) {}
}

export type HarbourActions = Harbour | ChooseWarshipPlan | DeclareMissionTarget;
