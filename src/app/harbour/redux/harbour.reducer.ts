import {
  BattleFieldPosition,
  IProvideWarshipPlan
} from '../../lib/battleships/contracts';
import { HarbourActions, HarbourActionTypes } from './harbour.actions';

export interface Slice {
  selectedShipPlan: IProvideWarshipPlan;
  coordinates: BattleFieldPosition[];
}

export const initialState: Slice = {
  selectedShipPlan: {} as IProvideWarshipPlan,
  coordinates: []
};

export function reducer(state = initialState, action: HarbourActions): Slice {
  switch (action.type) {
    case HarbourActionTypes.SelectWarshipPlan:
      return {
        ...state,
        selectedShipPlan: action.payload
      };

    default:
      return state;
  }
}
