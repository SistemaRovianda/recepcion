import { AppState } from '../../models/app-state.interface';
import { createSelector } from '@ngrx/store';

const PRODUCTS_STATE = (state: AppState) => state.products;

export const SELECT_PRODUCTS = createSelector(
  PRODUCTS_STATE,
  (state) => state.products
);
