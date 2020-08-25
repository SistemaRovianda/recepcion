import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { CalculatorDialogComponent } from 'src/app/shared/dialogs/calculator-dialog/calculator-dialog.component';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { SELECT_PRODUCTS } from 'src/app/shared/store/products/products.selectors';
import { BasicInformation } from 'src/app/shared/models/meat.interface';
import { CustomValidators } from 'src/app/shared/validators/numbers.validators';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss'],
})
export class FirstFormComponent implements OnInit {
  form: FormGroup;

  products$: Observable<Product[]>;

  @Input() area: string;

  @Output('onSubmit') submit = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private _store: Store<AppState>
  ) {
    this.form = fb.group({
      proveedor: ['', [Validators.required, CustomValidators.text]],
      lotProveedor: [
        '',
        [Validators.required, CustomValidators.textAndNumbers],
      ],
      productId: ['', Validators.required],
      date: [
        {
          value: moment(new Date()).format('YYYY-MM-DD'),
          disabled: true,
        },
      ],
      quantity: ['', [Validators.required, CustomValidators.integerNumber]],
      isPz: ['', Validators.required],
      observations: [''],
    });
  }

  ngOnInit() {
    this.products$ = this._store.select(SELECT_PRODUCTS);
  }

  onSubmit() {
    let basicInformation: BasicInformation = {
      ...this.form.value,
      date: moment(new Date()).format('YYYY-MM-DD'),
    };
    this.submit.emit(basicInformation);
  }

  calcKG() {
    this.openModalCalculator('kg', this.area);
  }

  calcPZ() {
    this.openModalCalculator('pz', this.area);
  }

  async openModalCalculator(typeCalc?: string, area?: string) {
    const modal = await this.modalCtrl.create({
      component: CalculatorDialogComponent,
      cssClass: 'calculator-dialog',
      componentProps: {
        typeCalc: typeCalc,
        area: area,
      },
    });

    modal.onDidDismiss().then((valueReturn) => {
      if (valueReturn !== null) {
        if (valueReturn.data !== undefined) {
          this.form.get('quantity').setValue(valueReturn.data.quantity);
          this.form
            .get('isPz')
            .setValue(valueReturn.data.typeCalc == 'pz' ? true : false);
        }
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
