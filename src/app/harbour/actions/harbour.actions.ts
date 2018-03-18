import { Action } from '@ngrx/store';
import { IProvideWarshipPlan } from '../../lib/battleships/contracts';

export enum HarbourActionTypes {
  HarbourAction = '[Harbour] Action',
  ChooseWarshipPlan = '[Harbour] Choose Warship Plan'
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

export type HarbourActions = Harbour | ChooseWarshipPlan;
