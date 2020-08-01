import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { Fridge } from 'src/app/shared/models/fridge.interface';
import { Observable } from 'rxjs';
import { fridgesSelector } from 'src/app/shared/store/fridges/fridges.selectors';
import { CustomValidators } from 'src/app/shared/validators/numbers.validators';

@Component({
  selector: 'app-fridge-form',
  templateUrl: './fridge-form.component.html',
  styleUrls: ['./fridge-form.component.scss'],
})
export class FridgeFormComponent implements OnInit {
  form: FormGroup;

  fridges$: Observable<Fridge[]>;

  @Input() titleForm: string;

  @Output('onSubmit') submit = new EventEmitter();

  constructor(private fb: FormBuilder, private _store: Store<AppState>) {
    this.form = fb.group({
      fridgeId: ['', Validators.required],
      observations: ['', CustomValidators.textAndNumbers],
    });
  }

  ngOnInit() {
    this.fridges$ = this._store.select(fridgesSelector);
  }

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
