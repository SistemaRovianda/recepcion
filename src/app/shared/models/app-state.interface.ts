import { LoginState } from './login.interface';
import { User } from './user.interface';
import { FridgesState } from '../store/fridges/fridges.reducer';
import { MeatState } from 'src/app/features/meat/store/meat/meat.reducer';
import { UsersRegisteredState } from '../store/usersRegistered/users-registered.reducer';
import { ProductsState } from '../store/products/products.reducer';
import { PackagingState } from 'src/app/features/packaging/store/packaging/packaging.reducer';
import { DriedState } from 'src/app/features/dried/store/dried/dried.reducer';

export interface AppState {
  login: LoginState;
  user: User;
  fridges: FridgesState;
  meat: MeatState;
  users: UsersRegisteredState;
  products: ProductsState;
  packaging: PackagingState;
  dried: DriedState;
}
