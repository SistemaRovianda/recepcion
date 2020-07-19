import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstFormPage } from './first-form.page';
import { TitleHeaderModule } from 'src/app/shared/components/header/header.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitleHeaderModule,
    RouterModule,
  ],
  declarations: [FirstFormPage],
})
export class FirstFormPageModule {}
