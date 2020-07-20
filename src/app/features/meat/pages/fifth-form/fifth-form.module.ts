import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FifthFormPage } from './fifth-form.page';
import { RouterModule } from '@angular/router';
import { FifthFormModule } from '../../components/forms/fifth-form/fifth-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    FifthFormModule,
  ],
  declarations: [FifthFormPage],
})
export class FifthFormPageModule {}
