import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondFormPage } from './second-form.page';
import { RouterModule } from '@angular/router';
import { SecondFormModule } from '../../components/forms/second-form/second-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    SecondFormModule,
  ],
  declarations: [SecondFormPage],
})
export class SecondFormPageModule {}
