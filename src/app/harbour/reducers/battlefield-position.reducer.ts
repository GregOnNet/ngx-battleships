import {
  BattleFieldPosition,
  IProvideWarshipPlan
} from '../../lib/battleships/contracts';
import { PositionActions, PositionActionTypes } from '../actions';

export interface Slice {
  coordinates: BattleFieldPosition[];
}

export const initialState: Slice = {
  coordinates: [],
};

export function reducer(state = initialState, action: PositionActions): Slice {
  switch (action.type) {
    case PositionActionTypes.DeclareMissionTarget:
      return {
        ...state,
        coordinates: action.payload
      };

    default:
      return state;
  }
}
