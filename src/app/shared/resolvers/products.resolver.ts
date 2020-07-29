import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../models/app-state.interface';
import { loadProducts } from '../store/products/products.actions';

@Injectable()
export class ProductsResolve implements Resolve<boolean> {
  constructor(private _store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | import('rxjs').Observable<boolean> | Promise<boolean> {
    this._store.dispatch(loadProducts({ area: route.paramMap.get('area') }));
    return true;
  }
}
