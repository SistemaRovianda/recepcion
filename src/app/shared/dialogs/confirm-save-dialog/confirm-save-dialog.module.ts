import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmSaveDialogComponent } from './confirm-save-dialog.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ConfirmSaveDialogComponent],
  imports: [CommonModule, IonicModule],
  exports: [ConfirmSaveDialogComponent],
  entryComponents: [ConfirmSaveDialogComponent],
})
export class ConfirmSaveDialogModule {}
