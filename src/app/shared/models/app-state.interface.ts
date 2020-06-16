import { LoginState } from "./login.interface";
import { User } from "./user.interface";

export interface AppState {
  login: LoginState;
  user: User;
}
