import { ActionReducerMap } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromHarbour from './harbour.reducer';

export * from './harbour.actions';
export * from './harbour.effects';
export * from './harbour.reducer';

export interface HarbourSlice {
  harbour: fromHarbour.Slice;
}

export interface State extends fromRoot.State {
  harbour: HarbourSlice;
}

export const reducers: ActionReducerMap<HarbourSlice> = {
  harbour: fromHarbour.reducer
};
