import { createSelector } from '@ngrx/store';
import { AppState } from '../../models/app-state.interface';

const FRIDGES_STATE = (state: AppState) => state.fridges;

export const fridgesSelector = createSelector(
  FRIDGES_STATE,
  (state) => state.fridges
);
