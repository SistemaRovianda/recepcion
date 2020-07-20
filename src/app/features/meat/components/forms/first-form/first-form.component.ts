import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import * as moment from 'moment';

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
      proveedor: ['', Validators.required],
      lotProveedor: ['', Validators.required],
      lotInternal: ['', Validators.required],
      rawMaterial: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmitForm() {
    this.submit.emit(this.form.value);
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
