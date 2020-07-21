import { createAction, props } from '@ngrx/store';
import { create } from 'domain';
import { Fridge } from '../../models/fridge.interface';

const LOAD_FRIDGES = '[Fridges] Load Fridges';

const LOAD_FRIDGES_SUCCESS = '[Fridges] Load Fridges Success';

const LOAD_FRIDGES_ERROR = '[Fridges] Load Fridges Error';

export const loadFridges = createAction(LOAD_FRIDGES);

export const loadFridgesSuccess = createAction(
  LOAD_FRIDGES_SUCCESS,
  props<{ fridges: Fridge[] }>()
);

export const loadFridgesError = createAction(
  LOAD_FRIDGES_ERROR,
  props<{ error: string }>()
);
