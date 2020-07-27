import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdFormComponent } from './third-form.component';
import { IonicModule } from '@ionic/angular';
import { CheckFormModule } from 'src/app/features/packaging/components/forms/check-form/check-form.module';

@NgModule({
  declarations: [ThirdFormComponent],
  imports: [CommonModule, IonicModule, CheckFormModule],
  exports: [ThirdFormComponent],
  providers: [],
})
export class ThirdFormModule {}
