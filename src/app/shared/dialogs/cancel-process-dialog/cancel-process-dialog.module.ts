import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelProcessDialogComponent } from './cancel-process-dialog.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CancelProcessDialogComponent],
  imports: [CommonModule, IonicModule],
  exports: [CancelProcessDialogComponent],
  providers: [],
  entryComponents: [CancelProcessDialogComponent],
})
export class CancelProcessDialogModule {}
