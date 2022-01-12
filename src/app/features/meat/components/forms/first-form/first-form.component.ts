import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { BasicInformation } from 'src/app/shared/models/meat.interface';
import { CustomValidators } from 'src/app/shared/validators/numbers.validators';

@Component({
  selector: 'first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss'],
})
export class FirstFormComponent implements OnInit {
  form: FormGroup;

  @Output('onSubmit') submit = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      proveedor: [''],
      lotProveedor: [
        '',
        [Validators.required, CustomValidators.textAndNumbers],
      ],
      lotInternal: ['', [Validators.required, CustomValidators.textAndNumbers]],
      rawMaterial: ['', [Validators.required, CustomValidators.textAndNumbers]],
      date: [
        {
          value: moment(new Date()).format('DD/MM/YYYY'),
          disabled: true,
        },
      ],
    });
  }

  ngOnInit() {}

  onSubmitForm() {
    let firstForm: BasicInformation = {
      ...this.form.value,
      date: moment(new Date()).format('YYYY-MM-DD'),
    };
    console.log('primer formulario: ', firstForm);
    this.submit.emit(firstForm);
  }

  get proveedor() {
    return this.form.get('proveedor');
  }

  get lotProveedor() {
    return this.form.get('lotProveedor');
  }

  get lotInternal() {
    return this.form.get('lotInternal');
  }

  get rawMaterial() {
    return this.form.get('rawMaterial');
  }
}
