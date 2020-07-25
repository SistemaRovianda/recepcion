import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckFormComponent } from './check-form.component';

@NgModule({
  declarations: [CheckFormComponent],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [CheckFormComponent],
  providers: [],
})
export class CheckFormModule {}
