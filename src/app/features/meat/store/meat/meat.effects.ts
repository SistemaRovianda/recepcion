import { Injectable } from '@angular/core';
import { MeatService } from 'src/app/shared/services/meat.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { saveEntryMeat, generateReportEntryMeat } from './meat.actions';
import { exhaustMap, switchMap, catchError } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/services/toast.service';

@Injectable({
  providedIn: 'root',
})
export class MeatEffects {
  constructor(
    private actions$: Actions,
    private meatService: MeatService,
    private toastService: ToastService
  ) {}

  saveEntryMeatEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveEntryMeat),
      exhaustMap((action) =>
        this.meatService.saveEntryMeat(action.entryMeat).pipe(
          switchMap((action) => {
            this.toastService.onSuccess();
            return [generateReportEntryMeat(action.meatId)];
          }),
          catchError((error) => {
            this.toastService.onError();
            return [];
          })
        )
      )
    )
  );

  generateReportEntryMeatEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(generateReportEntryMeat),
      exhaustMap((action) =>
        this.meatService.generateReport(action.entryMeatId).pipe(
          switchMap((_) => {
            return [];
          })
        )
      )
    )
  );
}
