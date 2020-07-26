import { LogginEffects } from 'src/app/features/landing/store/login/login.effects';
import { FridgesEffects } from '../fridges/fridges.effects';
import { MeatEffects } from 'src/app/features/meat/store/meat/meat.effects';
import { UsersRegisteredEffects } from '../usersRegistered/users-registered.effects';
import { ProductsEffects } from '../products/products.effects';
import { PackagingEffects } from 'src/app/features/packaging/store/packaging/packaging.effects';

export const effects = [
  LogginEffects,
  FridgesEffects,
  MeatEffects,
  UsersRegisteredEffects,
  ProductsEffects,
  PackagingEffects,
];
