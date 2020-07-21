import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from '../../models/app-state.interface';
import { loginReducer } from 'src/app/features/landing/store/login/login.reducer';
import { authenticationReducer } from 'src/app/features/landing/store/authentication/authentication.reducer';
import { fridgesReducer } from '../fridges/fridges.reducer';
import { meatReducer } from 'src/app/features/meat/store/meat/meat.reducer';
import { usersRegisteredReducer } from '../usersRegistered/users-registered.reducer';

export const reducers: ActionReducerMap<AppState> = {
  login: loginReducer,
  user: authenticationReducer,
  fridges: fridgesReducer,
  meat: meatReducer,
  users: usersRegisteredReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
