import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SecondStepPage } from './second-step.page';
import { SecondFormModule } from '../../components/forms/second-form/second-form.module';
import { ConfirmSaveDialogModule } from 'src/app/shared/dialogs/confirm-save-dialog/confirm-save-dialog.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SecondFormModule,
    ConfirmSaveDialogModule,
  ],
  declarations: [SecondStepPage],
})
export class SecondStepPageModule {}
