import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FridgesService } from '../../services/fridges.service';
import {
  loadFridges,
  loadFridgesSuccess,
  loadFridgesError,
} from './fridges.actions';
import { exhaustMap, switchMap, catchError } from 'rxjs/operators';
import { Fridge } from '../../models/fridge.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FridgesEffects {
  constructor(
    private actions$: Actions,
    private fridgesService: FridgesService
  ) {}

  loadFridgesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFridges),
      exhaustMap((_) =>
        this.fridgesService.getFridges().pipe(
          switchMap((fridges: Fridge[]) => [
            loadFridgesSuccess({ fridges: fridges }),
          ]),
          catchError((error) => of(loadFridgesError(error)))
        )
      )
    )
  );
}
