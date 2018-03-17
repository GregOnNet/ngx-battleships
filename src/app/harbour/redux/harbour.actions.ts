import { Action } from '@ngrx/store';
import { IProvideWarshipPlan } from '../../lib/battleships/contracts';

export enum HarbourActionTypes {
  SelectWarshipPlan = '[Harbour] Choose Warhsip Plan'
}

export class SelectWarshipPlan implements Action {
  readonly type = HarbourActionTypes.SelectWarshipPlan;

  constructor(public payload: IProvideWarshipPlan) {}
}

export type HarbourActions = SelectWarshipPlan;
