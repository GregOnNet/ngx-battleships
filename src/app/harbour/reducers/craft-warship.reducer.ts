import {
  BattleFieldPosition,
  IProvideWarshipPlan
} from '../../lib/battleships/contracts';
import { CraftWarshipActions, CraftWarshipActionTypes } from '../actions';

export interface Slice {
  current: IProvideWarshipPlan;
}

export const initialState: Slice = {
  current: {} as IProvideWarshipPlan,
};

export function reducer(state = initialState, action: CraftWarshipActions): Slice {
  switch (action.type) {
    case CraftWarshipActionTypes.ChooseWarshipPlanSuccess:
      return {
        ...state,
        current: action.payload
      };

    default:
      return state;
  }
}
