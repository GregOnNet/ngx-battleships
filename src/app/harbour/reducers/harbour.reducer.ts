import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { HarbourActions, HarbourActionTypes } from '../actions/harbour.actions';
import {
  IProvideWarshipPlan,
  BattleFieldPosition
} from '../../lib/battleships/contracts';

export interface Slice {
  warshipPlan: IProvideWarshipPlan;
  position: BattleFieldPosition[];
}

export const initialState: Slice = {
  warshipPlan: {} as IProvideWarshipPlan,
  position: []
};

export function reducer(state = initialState, action: HarbourActions): Slice {
  switch (action.type) {
    case HarbourActionTypes.ChooseWarshipPlan:
      return {
        ...state,
        warshipPlan: action.payload
      };

    case HarbourActionTypes.DeclareMissionTarget:
      return {
        ...state,
        position: action.payload
      };

    case HarbourActionTypes.HarbourAction:
      return state;

    default:
      return state;
  }
}
