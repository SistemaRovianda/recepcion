import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SixthFormPage } from './sixth-form.page';
import { RouterModule } from '@angular/router';
import { SixthFormModule } from '../../components/forms/sixth-form/sixth-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    SixthFormModule,
  ],
  declarations: [SixthFormPage],
})
export class SixthFormPageModule {}
