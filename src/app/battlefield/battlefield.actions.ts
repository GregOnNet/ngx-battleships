import { Action } from '@ngrx/store';

export enum BattlefieldActionTypes {
  BattlefieldAction = '[Battlefield] Action'
}

export class Battlefield implements Action {
  readonly type = BattlefieldActionTypes.BattlefieldAction;
}

export type BattlefieldActions = Battlefield;
