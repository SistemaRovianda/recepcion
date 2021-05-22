import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { type } from 'os';
import { AppState } from '../../models/app-state.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { valuePackingQuantitySelector } from 'src/app/features/packaging/store/packaging/packaging.selectors';

@Component({
  selector: 'app-calculator-dialog',
  templateUrl: './calculator-dialog.component.html',
  styleUrls: ['./calculator-dialog.component.scss'],
})
export class CalculatorDialogComponent implements OnInit {
  @Input() typeCalc: string;

  @Input() area: string;

  value: string;

  // value$: Observable<string>;

  constructor(
    private modalCtrl: ModalController,
    private store: Store<AppState>
  ) {
    this.value = '';
  }

  ngOnInit() {}

  pressNumber(num?: number) {
    if(num==null ){
      if(this.typeCalc.toUpperCase()=="KG"){
        this.value += ".";
      }
    }else{
      this.value += num;
    }
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  clearScreen() {
    this.value = '';
    localStorage.removeItem('objQuantity');
  }

  onAcceptKg() {
    localStorage.removeItem('objQuantity');
    let objQuantity = {
      area: this.area,
      typeCalc: this.typeCalc,
      quantity: +this.value,
    };

    localStorage.setItem('objQuantity', JSON.stringify(objQuantity));

    this.modalCtrl.dismiss({
      quantity: this.generateCalc(+this.value, 'kg'),
      typeCalc: 'kg',
    });
  }

  onAcceptPz() {
    localStorage.removeItem('objQuantity');

    let objQuantity = {
      area: this.area,
      typeCalc: this.typeCalc,
      quantity: +this.value,
    };
    localStorage.setItem('objQuantity', JSON.stringify(objQuantity));
    this.modalCtrl.dismiss({
      quantity: this.generateCalc(+this.value, 'pz'),
      typeCalc: 'pz',
    });
  }

  onAcceptBx() {
    localStorage.removeItem('objQuantity');

    let objQuantity = {
      area: this.area,
      typeCalc: this.typeCalc,
      quantity: +this.value,
    };
    localStorage.setItem('objQuantity', JSON.stringify(objQuantity));
    this.modalCtrl.dismiss({
      quantity: this.value,
      typeCalc: 'box',
    });
  }

  generateCalc(value: number, typeCalc?: string): number {
    return typeCalc == 'kg' ? value : value;
  }

  valueExist() {
    console.log(`TypeCalc: ${this.typeCalc} Area: ${this.area}`);
    console.log('obj: ', localStorage.getItem('objQuantity'));
    const quantity = JSON.parse(localStorage.getItem('objQuantity'));
    if (this.typeCalc == 'kg' && this.area == 'packing')
      return quantity
        ? quantity.area == 'packing' && quantity.typeCalc == 'kg'
          ? `${quantity.quantity}Kg`
          : '0000Kg'
        : '0000kg';
    if (this.typeCalc == 'kg' && this.area == 'drief')
      return quantity
        ? quantity.area == 'drief' && quantity.typeCalc == 'kg'
          ? `${quantity.quantity}Kg`
          : '0000Kg'
        : '0000kg';
    if (this.typeCalc == 'pz' && this.area == 'packing')
      return quantity
        ? quantity.area == 'packing' && quantity.typeCalc == 'pz'
          ? `${quantity.quantity}Pz`
          : '0000Pz'
        : '0000Pz';
    if (this.typeCalc == 'pz' && this.area == 'drief')
      return quantity
        ? quantity.area == 'drief' && quantity.typeCalc == 'pz'
          ? `${quantity.quantity}Pz`
          : '0000Pz'
        : '0000Pz';
  }
}
