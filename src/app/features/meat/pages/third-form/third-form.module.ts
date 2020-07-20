import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdFormPage } from './third-form.page';
import { RouterModule } from '@angular/router';
import { ThirdFormModule } from '../../components/forms/third-form/third-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ThirdFormModule,
  ],
  declarations: [ThirdFormPage],
})
export class ThirdFormPageModule {}
