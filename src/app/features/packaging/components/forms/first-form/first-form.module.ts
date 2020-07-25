import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstFormComponent } from './first-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalculatorDialogModule } from 'src/app/shared/dialogs/calculator-dialog/calculator-dialog.module';

@NgModule({
  declarations: [FirstFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CalculatorDialogModule,
  ],
  exports: [FirstFormComponent],
  providers: [],
})
export class FirstFormModule {}
