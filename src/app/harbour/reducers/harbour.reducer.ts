import { Action } from '@ngrx/store';
import { HarbourActions, HarbourActionTypes } from '../actions/harbour.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: HarbourActions): State {
  switch (action.type) {

    case HarbourActionTypes.HarbourAction:
      return state;


    default:
      return state;
  }
}
