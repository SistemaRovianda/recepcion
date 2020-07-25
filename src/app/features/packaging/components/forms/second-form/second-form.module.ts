import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondFormComponent } from './second-form.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckFormModule } from '../check-form/check-form.module';

@NgModule({
  declarations: [SecondFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CheckFormModule,
  ],
  exports: [SecondFormComponent],
  providers: [],
})
export class SecondFormModule {}
