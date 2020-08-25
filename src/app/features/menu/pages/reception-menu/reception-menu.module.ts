import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';

import { ReceptionMenuComponent } from './reception-menu.component';
import { CancelProcessDialogModule } from 'src/app/shared/dialogs/cancel-process-dialog/cancel-process-dialog.module';

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  TitleHeaderModule,
  RouterModule,CancelProcessDialogModule
];

const COMMON_DECLARATIONS = [ReceptionMenuComponent];

@NgModule({
  imports: [COMMON_IMPORTS],
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class ReceptionMenuModule {}
