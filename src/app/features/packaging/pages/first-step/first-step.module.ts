import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FirstStepPage } from './first-step.page';
import { FirstFormModule } from '../../components/first-form/first-form.module';

@NgModule({
  imports: [CommonModule, IonicModule, FirstFormModule],
  declarations: [FirstStepPage],
})
export class FirstStepPageModule {}
