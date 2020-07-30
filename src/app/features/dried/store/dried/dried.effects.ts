import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  saveEntryDried,
  generateReportEntryDried,
  clearEntryDried,
} from './dried.actions';
import { exhaustMap, switchMap, tap, catchError } from 'rxjs/operators';
import { DriedService } from 'src/app/shared/services/dried.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/shared/services/report.service';

@Injectable({
  providedIn: 'root',
})
export class DriedEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private driedService: DriedService,
    private toastService: ToastService,
    private reportService: ReportService
  ) {}

  saveEntryDriedEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveEntryDried),
        exhaustMap((action) =>
          this.driedService.saveEntryDried(action.entryDried).pipe(
            tap((driefId) => {
              this.toastService.onSuccess();
              this.router.navigate([
                'dried/print-report',
                `${driefId.driefId}`,
              ]);
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

  generateReportEntryDriedEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(generateReportEntryDried),
      exhaustMap((action) =>
        this.reportService.generateReport(action.entryDriedId, 'drief').pipe(
          switchMap((_) => {
            return [clearEntryDried()];
          })
        )
      )
    )
  );
}
