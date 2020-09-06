import { Injectable } from '@angular/core';
import { MeatService } from 'src/app/shared/services/meat.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  saveEntryMeat,
  generateReportEntryMeat,
  clearEntryMeat,
  saveEntryMeatError,
  saveEntryMeatSuccess,
} from './meat.actions';
import { exhaustMap, switchMap, catchError, tap } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/shared/services/report.service';

@Injectable({
  providedIn: 'root',
})
export class MeatEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private meatService: MeatService,
    private toastService: ToastService,
    private reportService: ReportService
  ) {}

  saveEntryMeatEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveEntryMeat),
        exhaustMap((action) =>
          this.meatService.saveEntryMeat(action.entryMeat).pipe(
            switchMap((action) => {
              this.toastService.onSuccess();
              this.router.navigate(['meat/print-report', `${action.meatId}`]);
              return [saveEntryMeatSuccess()];
            }),
            catchError((error) => {
              this.toastService.onError();
              return [saveEntryMeatError()];
            })
          )
        )
      )
  );

  generateReportEntryMeatEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(generateReportEntryMeat),
      exhaustMap((action) =>
        this.reportService.generateReport(action.entryMeatId, 'meat').pipe(
          switchMap((_) => {
            return [clearEntryMeat()];
          })
        )
      )
    )
  );
}
