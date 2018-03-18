import * as fromRoot from '../../reducers';
import { Slice } from './harbour.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  harbour: Slice;
}

export const visitHarbour = createFeatureSelector<Slice>('harbour');

export const warshipPlan = createSelector(
  visitHarbour,
  harbour => harbour.warshipPlan
);

export const position = createSelector(
  visitHarbour,
  harbour => harbour.position
);

export const all = createSelector(
  warshipPlan,
  position,
  (plan, currentPosition) => ({plan, currentPosition})
);
