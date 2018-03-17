import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { WarshipSkeleton } from '../../lib/battleships';
import * as Warship from '../../lib/battleships';
import { IProvideWarshipPlan } from '../../lib/battleships/contracts';
import * as fromRoot from '../../reducers';
import * as fromBattlefieldPosition from './battlefield-position.reducer';
import * as fromCraftWarship from './craft-warship.reducer';

export interface HarbourSlice {
  craftWarship: fromCraftWarship.Slice;
  battlefieldPosition: fromBattlefieldPosition.Slice;
}

export interface State extends fromRoot.State {
  habour: HarbourSlice;
}

export const reducers: ActionReducerMap<HarbourSlice> = {
  craftWarship: fromCraftWarship.reducer,
  battlefieldPosition: fromBattlefieldPosition.reducer
};

export const visitHarbour = createFeatureSelector<HarbourSlice>('harbour');

export const warshipPlan = createSelector(visitHarbour, slice =>
  provideWarshipSkeleton(slice.craftWarship.current)
);

export const battlefieldPosition = createSelector(
  visitHarbour,
  slice => slice.battlefieldPosition.coordinates
);

export const all = createSelector(
  warshipPlan,
  battlefieldPosition,
  (plan, position) => ({ plan, position })
);


function provideWarshipSkeleton(plan: IProvideWarshipPlan) {
  switch (plan.name) {
    case 'Destroyer':
      return new WarshipSkeleton(plan.name, Warship.Destroyer, 2);
    case 'Submarine':
      return new WarshipSkeleton(plan.name, Warship.Submarine, 3);
    case 'Cruiser':
      return new WarshipSkeleton(plan.name, Warship.Cruiser, 3);
    case 'Battleship':
      return new WarshipSkeleton(plan.name, Warship.Battleship, 4);
    case 'Carrier':
      return new WarshipSkeleton(plan.name, Warship.Battleship, 5);
    default:
      return plan;
  }
}
