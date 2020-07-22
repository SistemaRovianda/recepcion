import { Injectable } from '@angular/core';
import { MeatService } from 'src/app/shared/services/meat.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  saveEntryMeat,
  generateReportEntryMeat,
  clearEntryMeat,
} from './meat.actions';
import { exhaustMap, switchMap, catchError, tap } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MeatEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private meatService: MeatService,
    private toastService: ToastService
  ) {}

  saveEntryMeatEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveEntryMeat),
        exhaustMap((action) =>
          this.meatService.saveEntryMeat(action.entryMeat).pipe(
            tap((action) => {
              this.toastService.onSuccess();
              this.router.navigate(['meat/print-report', `${action.meatId}`]);
            }),
            catchError((error) => {
              this.toastService.onError();
              return [];
            })
          )
        )
      ),
    {
      dispatch: false,
    }
  );

  generateReportEntryMeatEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(generateReportEntryMeat),
      exhaustMap((action) =>
        this.meatService.generateReport(action.entryMeatId).pipe(
          switchMap((_) => {
            return [clearEntryMeat()];
          })
        )
      )
    )
  );
}
