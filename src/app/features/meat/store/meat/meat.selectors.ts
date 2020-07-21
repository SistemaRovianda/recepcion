import { AppState } from 'src/app/shared/models/app-state.interface';
import { createSelector } from '@ngrx/store';

const MEAT_STATE = (state: AppState) => state.meat;

export const meatSelector = createSelector(
  MEAT_STATE,
  (state) => state.entryMeat
);
