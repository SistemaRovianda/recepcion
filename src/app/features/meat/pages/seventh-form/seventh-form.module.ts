import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeventhFormPage } from './seventh-form.page';
import { RouterModule } from '@angular/router';
import { SeventhFormModule } from '../../components/forms/seventh-form/seventh-form.module';
import { ConfirmSaveDialogModule } from 'src/app/shared/dialogs/confirm-save-dialog/confirm-save-dialog.module';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    SeventhFormModule,
    ConfirmSaveDialogModule,
    TitleHeaderModule,
  ],
  declarations: [SeventhFormPage],
})
export class SeventhFormPageModule {}
