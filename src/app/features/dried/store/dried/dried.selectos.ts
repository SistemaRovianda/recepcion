import { AppState } from 'src/app/shared/models/app-state.interface';
import { createSelector } from '@ngrx/store';

const ENTRY_DRIED_STATE = (state: AppState) => state.dried;

export const entryDriedSelector = createSelector(
  ENTRY_DRIED_STATE,
  (state) => state.entryDried
);
