import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FridgeFormComponent } from './fridge-form.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FridgeFormComponent],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [FridgeFormComponent],
  providers: [],
})
export class FridgeFormModule {}
