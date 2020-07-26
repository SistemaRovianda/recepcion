import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { CalculatorDialogComponent } from 'src/app/shared/dialogs/calculator-dialog/calculator-dialog.component';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { SELECT_PRODUCTS } from 'src/app/shared/store/products/products.selectors';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss'],
})
export class FirstFormComponent implements OnInit {
  form: FormGroup;

  products$: Observable<Product[]>;

  @Output('onSubmit') submit = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private _store: Store<AppState>
  ) {
    this.form = fb.group({
      proveedor: ['', Validators.required],
      lotProveedor: ['', Validators.required],
      productId: ['', Validators.required],
      date: [
        {
          value: moment(new Date()).format('DD/MM/YYYY'),
          disabled: true,
        },
      ],
      quantity: ['', Validators.required],
      observations: [''],
    });
  }

  ngOnInit() {
    this.products$ = this._store.select(SELECT_PRODUCTS);
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }

  calcKG() {
    this.openModalCalculator('kg');
  }

  calcPZ() {
    this.openModalCalculator('pz');
  }

  async openModalCalculator(typeCalc?: string) {
    const modal = await this.modalCtrl.create({
      component: CalculatorDialogComponent,
      cssClass: 'calculator-dialog',
      componentProps: {
        typeCalc: typeCalc,
      },
    });

    modal.onDidDismiss().then((valueReturn) => {
      if (valueReturn !== null) {
        if (valueReturn.data !== undefined)
          this.form.get('quantity').setValue(valueReturn.data.quantity);
      }
    });

    return await modal.present();
  }

  get proveedor() {
    return this.form.get('proveedor');
  }

  get lotProveedor() {
    return this.form.get('lotProveedor');
  }

  get productId() {
    return this.form.get('productId');
  }

  get quantity() {
    return this.form.get('quantity');
  }

  get observations() {
    return this.form.get('observations');
  }
}
