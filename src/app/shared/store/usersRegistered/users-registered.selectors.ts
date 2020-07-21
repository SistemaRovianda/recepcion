import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';

const SELECT_USERS_REGISTERED_STATE = (state: AppState) => state.users;

export const SELECT_USERS_REGISTERED = createSelector(
  SELECT_USERS_REGISTERED_STATE,
  (state) => state.usersRegistered
);
