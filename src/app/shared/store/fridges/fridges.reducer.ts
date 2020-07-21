import { Fridge } from '../../models/fridge.interface';
import { createReducer, on, Action } from '@ngrx/store';
import {
  loadFridges,
  loadFridgesSuccess,
  loadFridgesError,
} from './fridges.actions';

export interface FridgesState {
  loading: boolean;
  fridges: Fridge[];
  error: string;
}

const initialState: FridgesState = {
  loading: false,
  fridges: [],
  error: null,
};

const _fridgesReducer = createReducer<FridgesState>(
  initialState,
  on(loadFridges, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadFridgesSuccess, (state, { fridges }) => ({
    ...state,
    loading: false,
    fridges,
  })),
  on(loadFridgesError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function fridgesReducer(state: FridgesState, action: Action) {
  return _fridgesReducer(state, action);
}
