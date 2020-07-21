import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fridge-form',
  templateUrl: './fridge-form.component.html',
  styleUrls: ['./fridge-form.component.scss'],
})
export class FridgeFormComponent implements OnInit {
  form: FormGroup;

  @Input() titleForm: string;

  @Output('onSubmit') submit = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      fridgeId: ['', Validators.required],
      observations: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmitForm() {
    this.submit.emit(this.form.value);
  }

  get fridgeId() {
    return this.form.get('fridgeId');
  }

  get observations() {
    return this.form.get('observations');
  }
}
