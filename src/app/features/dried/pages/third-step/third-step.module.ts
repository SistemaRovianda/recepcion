import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdStepPage } from './third-step.page';
import { ThirdFormModule } from '../../components/third-form/third-form.module';
import { ConfirmSaveDialogModule } from 'src/app/shared/dialogs/confirm-save-dialog/confirm-save-dialog.module';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmSaveDialogModule,
    ThirdFormModule,
    TitleHeaderModule,
  ],
  declarations: [ThirdStepPage],
})
export class ThirdStepPageModule {}
