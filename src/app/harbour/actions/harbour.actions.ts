import { Action } from '@ngrx/store';

export enum HarbourActionTypes {
  HarbourAction = '[Harbour] Action'
}

export class Harbour implements Action {
  readonly type = HarbourActionTypes.HarbourAction;
}

export type HarbourActions = Harbour;
