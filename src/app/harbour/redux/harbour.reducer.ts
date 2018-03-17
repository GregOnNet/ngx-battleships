import { Action } from '@ngrx/store';
import { HarbourActions, HarbourActionTypes } from './harbour.actions';

export interface State {
  selectedShipSkeleton;
  coordinates;
}

export const initialState: State = {
  selectedShipSkeleton: {},
  coordinates: []
};

export function reducer(state = initialState, action: HarbourActions): State {
  switch (action.type) {

    case HarbourActionTypes.HarbourAction:
      return state;


    default:
      return state;
  }
}
