import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondStepPage } from './second-step.page';
import { SecondFormModule } from '../../components/second-form/second-form.module';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondFormModule,
    TitleHeaderModule,
  ],
  declarations: [SecondStepPage],
})
export class SecondStepPageModule {}
