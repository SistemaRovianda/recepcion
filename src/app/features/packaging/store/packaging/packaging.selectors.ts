import { AppState } from 'src/app/shared/models/app-state.interface';
import { createSelector } from '@ngrx/store';

const ENTRY_PACKAGING_STATE = (state: AppState) => state.packaging;

export const entryPackagingSelector = createSelector(
  ENTRY_PACKAGING_STATE,
  (state) => state.entryPackaging
);

export const valuePackingQuantitySelector = createSelector(
  ENTRY_PACKAGING_STATE,
  (state) => state.entryPackaging.quantity
);


export const packagingLoadingSelector = createSelector(
  ENTRY_PACKAGING_STATE,
  (state) => state.loading
)