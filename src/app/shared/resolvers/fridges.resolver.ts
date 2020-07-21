import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state.interface';
import { loadFridges } from '../store/fridges/fridges.actions';

@Injectable()
export class FridgesResolve implements Resolve<boolean> {
  constructor(private _store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | import('rxjs').Observable<boolean> | Promise<boolean> {
    this._store.dispatch(loadFridges());
    return true;
  }
}
