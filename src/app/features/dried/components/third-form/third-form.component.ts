import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.scss'],
})
export class ThirdFormComponent implements OnInit {
  form: FormGroup;

  @Output('onSubmit') submit = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      color: ['', Validators.required],
      texture: ['', Validators.required],
      weight: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onColorSubmit(evt) {
    this.form.get('color').setValue(evt);
  }

  onTextureSubmit(evt) {
    this.form.get('texture').setValue(evt);
  }

  onWeightSubmit(evt) {
    this.form.get('weight').setValue(evt);
  }

  onSubmitForm() {
    this.submit.emit(this.form.value);
  }

  get color() {
    return this.form.get('color');
  }

  get texture() {
    return this.form.get('texture');
  }

  get weight() {
    return this.form.get('weight');
  }
}
