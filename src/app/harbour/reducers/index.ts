import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { WarshipSkeleton } from '../../lib/battleships';
import * as Warship from '../../lib/battleships';
import { IProvideWarshipPlan } from '../../lib/battleships/contracts';
import { WarshipSkeletons } from '../../lib/battleships/warship-skeleton/warship-skeletons';
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
  WarshipSkeletons.byName(slice.craftWarship.current.name);
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
