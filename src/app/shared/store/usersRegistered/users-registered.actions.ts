import { createAction, props } from '@ngrx/store';
import { UserRegistered } from 'src/app/shared/models/user.interface';

const FETCH_USERS_REGISTERED = '[USERS] Fetch Users Registered';

const FETCH_USERS_REGISTERED_SUCCESS = '[USERS] Fetch Users Reviewed Success';

const FETCH_USERS_REGISTERED_FAILURED = '[USERS] Fetch Users Reviewed Failured';

export const fetchUsersRegistered = createAction(FETCH_USERS_REGISTERED);

export const fetchUsersRegisteredSuccess = createAction(
  FETCH_USERS_REGISTERED_SUCCESS,
  props<{ usersRegistered: UserRegistered[] }>()
);

export const fetchUsersRegisteredFailured = createAction(
  FETCH_USERS_REGISTERED_FAILURED,
  props<{ error: string }>()
);
