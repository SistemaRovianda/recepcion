import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FirstStepPage } from './first-step.page';
import { FirstFormModule } from '../../components/forms/first-form/first-form.module';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';
import { CancelProcessDialogModule } from 'src/app/shared/dialogs/cancel-process-dialog/cancel-process-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FirstFormModule,
    TitleHeaderModule,
    CancelProcessDialogModule,
  ],
  declarations: [FirstStepPage],
})
export class FirstStepPageModule {}
