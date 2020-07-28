import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

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

  @Output('onSubmit') submit = new EventEmitter();

  date: string;

  constructor(private fb: FormBuilder) {
    this.date = moment(new Date()).format('YYYY-MM-DD');
    this.form = fb.group({
      value: ['', Validators.required],
      observations: ['', Validators.required],
      accepted: ['', Validators.required],
    });
  }

  ngOnInit() {}

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
