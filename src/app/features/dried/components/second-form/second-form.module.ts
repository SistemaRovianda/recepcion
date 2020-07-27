import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondFormComponent } from './second-form.component';
import { IonicModule } from '@ionic/angular';
import { CheckFormModule } from 'src/app/features/packaging/components/forms/check-form/check-form.module';

@NgModule({
  declarations: [SecondFormComponent],
  imports: [CommonModule, IonicModule, CheckFormModule],
  exports: [SecondFormComponent],
  providers: [],
})
export class SecondFormModule {}
