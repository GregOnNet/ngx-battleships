import { Action } from '@ngrx/store';
import { BattlefieldActions, BattlefieldActionTypes } from './battlefield.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: BattlefieldActions): State {
  switch (action.type) {

    case BattlefieldActionTypes.BattlefieldAction:
      return state;


    default:
      return state;
  }
}
