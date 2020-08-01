import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss'],
})
export class SecondFormComponent implements OnInit {
  form: FormGroup;

  @Output('onSubmit') submit = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      quality: ['', Validators.required],
      expiration: ['', Validators.required],
      strangeMaterial: ['', Validators.required],
      transport: ['', Validators.required],
      paking: ['', Validators.required],
      odor: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onQualitySubmit(evt) {
    console.log('quality: ', evt);
    this.form.get('quality').setValue(evt);
  }

  onExpirationSubmit(evt) {
    console.log('expiration: ', evt);
    this.form.get('expiration').setValue(evt);
  }

  onStrageMaterialSubmit(evt) {
    console.log('strageMaterial: ', evt);
    this.form.get('strangeMaterial').setValue(evt);
  }

  onTransportSubmit(evt) {
    console.log('transport: ', evt);
    this.form.get('transport').setValue(evt);
  }

  onPakingSubmit(evt) {
    console.log('packing: ', evt);
    this.form.get('paking').setValue(evt);
  }

  onOdorSubmit(evt) {
    console.log('odor :', evt);
    this.form.get('odor').setValue(evt);
  }

  onSubmitForm() {
    this.submit.emit(this.form.value);
  }

  get quality() {
    return this.form.get('quality');
  }

  get expiration() {
    return this.form.get('expiration');
  }

  get strangeMaterial() {
    return this.form.get('strangeMaterial');
  }

  get transport() {
    return this.form.get('transport');
  }

  get packing() {
    return this.form.get('transport');
  }

  get odor() {
    return this.form.get('odor');
  }
}
