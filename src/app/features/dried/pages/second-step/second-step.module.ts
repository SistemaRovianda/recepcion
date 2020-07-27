import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondStepPage } from './second-step.page';
import { SecondFormModule } from '../../components/second-form/second-form.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SecondFormModule],
  declarations: [SecondStepPage],
})
export class SecondStepPageModule {}
