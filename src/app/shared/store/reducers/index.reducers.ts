import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AppState } from "../../models/app-state.interface";
import { loginReducer } from "src/app/features/landing/store/login/login.reducer";
import { authenticationReducer } from "src/app/features/landing/store/authentication/authentication.reducer";

export const reducers: ActionReducerMap<AppState> = {
  login: loginReducer,
  user: authenticationReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
