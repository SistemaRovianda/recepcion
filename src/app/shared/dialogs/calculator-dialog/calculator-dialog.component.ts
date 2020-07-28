import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { type } from 'os';

@Component({
  selector: 'app-calculator-dialog',
  templateUrl: './calculator-dialog.component.html',
  styleUrls: ['./calculator-dialog.component.scss'],
})
export class CalculatorDialogComponent implements OnInit {
  @Input() typeCalc: string;

  value: string;

  constructor(private modalCtrl: ModalController) {
    this.value = '';
  }

  ngOnInit() {}

  pressNumber(num?: number) {
    this.value += num;
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  clearScreen() {
    this.value = '';
  }

  onAcceptKg() {
    this.modalCtrl.dismiss({
      quantity: this.generateCalc(+this.value, 'kg'),
      typeCalc: 'kg',
    });
  }

  onAcceptPz() {
    this.modalCtrl.dismiss({
      quantity: this.generateCalc(+this.value, 'pz'),
      typeCalc: 'pz',
    });
  }

  generateCalc(value: number, typeCalc?: string): number {
    return typeCalc == 'kg' ? value : value;
  }
}
