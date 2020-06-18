import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';

import { ReceptionMenuComponent } from './reception-menu.component';

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  TitleHeaderModule,
  RouterModule,
];

const COMMON_DECLARATIONS = [ReceptionMenuComponent];

@NgModule({
  imports: [COMMON_IMPORTS],
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class ReceptionMenuModule {}
