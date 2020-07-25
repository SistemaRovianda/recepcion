import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorDialogComponent } from './calculator-dialog.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalculatorDialogComponent],
  imports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  exports: [CalculatorDialogComponent],
  entryComponents: [CalculatorDialogComponent],
})
export class CalculatorDialogModule {}
