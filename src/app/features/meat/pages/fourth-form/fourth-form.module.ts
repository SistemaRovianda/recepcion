import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FourthFormPage } from './fourth-form.page';
import { RouterModule } from '@angular/router';
import { BasicFormModule } from '../../components/forms/basic-form/basic-form.module';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';
import { BasicCheckFormModule } from '../../components/forms/basic-check-form/basic-check-form.module';
import { FridgeFormModule } from '../../components/forms/fridge-form/fridge-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    BasicFormModule,
    BasicCheckFormModule,
    FridgeFormModule,
    TitleHeaderModule,
  ],
  declarations: [FourthFormPage],
})
export class FourthFormPageModule {}
