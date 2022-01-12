import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { CustomValidators } from 'src/app/shared/validators/numbers.validators';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  form: FormGroup;

  @Input() titleForm: string;

  @Input() infoOne: string;

  @Input() infoTwo: string;

  @Input() placeholderMessage: string;

  @Input() typeValue: string;

  @Output('onSubmit') submit = new EventEmitter();

  date: string;

  constructor(private fb: FormBuilder) {
    this.date = moment(new Date()).format('DD/MM/YYYY');
    this.form = fb.group({
      value: ['', Validators.required],
      observations: ['', CustomValidators.textAndNumbers],
      accepted: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.setValidatorByTypeValue();
  }

  setValidatorByTypeValue() {
    if (this.typeValue == 'numberT') {
      this.form.get('value').clearValidators();
      this.form
        .get('value')
        .setValidators([
          Validators.required,
          // Validators.max(4),
          // Validators.min(-18),
          CustomValidators.integerForTemperature
        ]);
    }
    if (this.typeValue == 'numberW') {
      console.log('numberW...');
      this.form.get('value').clearValidators();
      this.form
        .get('value')
        .setValidators([
          Validators.required,
          CustomValidators.integerForWeight,
        ]);
    }

    if (this.typeValue == 'text') {
      this.form.get('value').clearValidators();
      this.form
        .get('value')
        .setValidators([Validators.required, CustomValidators.textAndNumbers]);
    }
  }

  onSubmitForm() {
    this.submit.emit(this.form.value);
  }

  get value() {
    return this.form.get('value');
  }

  get observations() {
    return this.form.get('observations');
  }

  get accepted() {
    return this.form.get('accepted');
  }
}
