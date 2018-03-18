import { Action } from '@ngrx/store';
import { HarbourActions, HarbourActionTypes } from '../actions/harbour.actions';
import { IProvideWarshipPlan } from '../../lib/battleships/contracts';

export interface Slice {
  warshipPlan: IProvideWarshipPlan;
}

export const initialState: Slice = {
  warshipPlan: {} as IProvideWarshipPlan
};

export function reducer(state = initialState, action: HarbourActions): Slice {
  switch (action.type) {
    case HarbourActionTypes.ChooseWarshipPlan:
      return {
        ...state,
        warshipPlan: action.payload
      };

    case HarbourActionTypes.HarbourAction:
      return state;

    default:
      return state;
  }
}
