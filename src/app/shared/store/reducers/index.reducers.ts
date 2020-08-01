import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from '../../models/app-state.interface';
import { loginReducer } from 'src/app/features/landing/store/login/login.reducer';
import { authenticationReducer } from 'src/app/features/landing/store/authentication/authentication.reducer';
import { fridgesReducer } from '../fridges/fridges.reducer';
import { meatReducer } from 'src/app/features/meat/store/meat/meat.reducer';
import { usersRegisteredReducer } from '../usersRegistered/users-registered.reducer';
import { ProductsReducer } from '../products/products.reducer';
import { packagingReducer } from '../../../features/packaging/store/packaging/packaging.reducer';
import { driedReducer } from 'src/app/features/dried/store/dried/dried.reducer';

export const reducers: ActionReducerMap<AppState> = {
  login: loginReducer,
  user: authenticationReducer,
  fridges: fridgesReducer,
  meat: meatReducer,
  users: usersRegisteredReducer,
  products: ProductsReducer,
  packaging: packagingReducer,
  dried: driedReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
