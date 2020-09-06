import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PackagingService } from 'src/app/shared/services/packaging.service';
import { ReportService } from 'src/app/shared/services/report.service';
import {
  saveEntryPackaging,
  generateReportEntryPackaging,
  clearEntryPackaging,
  saveEntryPackagingSuccess,
  saveEntryPackagingError,
} from './packaging.actions';
import { exhaustMap, switchMap, tap, catchError } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PackagingEffects {
  constructor(
    private actions$: Actions,
    private packagingService: PackagingService,
    private reportService: ReportService,
    private toastService: ToastService,
    private router: Router
  ) {}

  savePackagingEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveEntryPackaging),
        exhaustMap((action) =>
          this.packagingService.saveEntryPackaging(action.entryPackaging).pipe(
            switchMap((entryPackagingId) => {
              this.toastService.onSuccess();
              localStorage.removeItem('objQuantity');
              this.router.navigate([
                'packaging/print-report',
                `${entryPackagingId.packingId}`,
              ]);
              return [
                saveEntryPackagingSuccess()
              ]
            }),
            catchError((error) => {
              this.toastService.onError();
              return [saveEntryPackagingError()];
            })
          )
        )
      )
  );

  generateReportEntryPackingEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(generateReportEntryPackaging),
      exhaustMap((action) =>
        this.reportService
          .generateReport(action.entryPackagingId, 'packing')
          .pipe(
            switchMap((_) => {
              return [clearEntryPackaging()];
            })
          )
      )
    )
  );
}
