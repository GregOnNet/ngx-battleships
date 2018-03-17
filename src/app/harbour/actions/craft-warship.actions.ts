import { Action } from '@ngrx/store';

import {
  BattleFieldPosition,
  IProvideWarshipPlan
} from '../../lib/battleships/contracts';

export enum CraftWarshipActionTypes {
  ChooseWarshipPlan = '[Harbour] Choose Warhsip Plan',
}

export class ChooseWarshipPlan implements Action {
  readonly type = CraftWarshipActionTypes.ChooseWarshipPlan;

  constructor(public payload: IProvideWarshipPlan) {}
}

export type CraftWarshipActions = ChooseWarshipPlan;
