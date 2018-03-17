import { Action } from '@ngrx/store';

import {
  BattleFieldPosition,
  IProvideWarshipPlan
} from '../../lib/battleships/contracts';

export enum PositionActionTypes {
  DeclareMissionTarget = '[Harbour] Declare Mission Target'
}

export class DeclareMissionTarget implements Action {
  readonly type = PositionActionTypes.DeclareMissionTarget;

  constructor(public payload: BattleFieldPosition[]) {}
}

export type PositionActions = DeclareMissionTarget;
