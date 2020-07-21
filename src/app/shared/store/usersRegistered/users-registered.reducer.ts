import { UserRegistered } from 'src/app/shared/models/user.interface';
import { createReducer, on, Action } from '@ngrx/store';
import {
  fetchUsersRegistered,
  fetchUsersRegisteredSuccess,
} from './users-registered.actions';

export interface UsersRegisteredState {
  usersRegistered: UserRegistered[];
  loading: boolean;
  error: string;
}

const initialState: UsersRegisteredState = {
  loading: false,
  usersRegistered: [],
  error: null,
};

const _usersRegisteredReducer = createReducer<UsersRegisteredState>(
  initialState,
  on(fetchUsersRegistered, (state) => ({
    ...state,
    loading: true,
  })),
  on(fetchUsersRegisteredSuccess, (state, { usersRegistered }) => ({
    ...state,
    loading: false,
    usersRegistered,
  }))
);

export function usersRegisteredReducer(
  state: UsersRegisteredState,
  action: Action
) {
  return _usersRegisteredReducer(state, action);
}
