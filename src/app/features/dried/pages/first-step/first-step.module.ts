import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstStepPage } from './first-step.page';
import { FirstFormModule } from 'src/app/features/packaging/components/forms/first-form/first-form.module';
import { CalculatorDialogModule } from 'src/app/shared/dialogs/calculator-dialog/calculator-dialog.module';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';
import { CancelProcessDialogModule } from 'src/app/shared/dialogs/cancel-process-dialog/cancel-process-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstFormModule,
    CalculatorDialogModule,
    TitleHeaderModule,
    CancelProcessDialogModule,
  ],
  declarations: [FirstStepPage],
})
export class FirstStepPageModule {}
