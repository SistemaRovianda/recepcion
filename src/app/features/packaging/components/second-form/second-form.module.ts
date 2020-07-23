import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondFormComponent } from './second-form.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SecondFormComponent],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [SecondFormComponent],
  providers: [],
})
export class SecondFormModule {}
