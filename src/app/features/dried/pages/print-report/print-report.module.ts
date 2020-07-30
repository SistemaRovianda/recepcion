import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintReportPage } from './print-report.page';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TitleHeaderModule],
  declarations: [PrintReportPage],
})
export class PrintReportPageModule {}
