import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FourthFormPage } from './fourth-form.page';
import { RouterModule } from '@angular/router';
import { FourthFormModule } from '../../components/forms/fourth-form/fourth-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    FourthFormModule,
  ],
  declarations: [FourthFormPage],
})
export class FourthFormPageModule {}
