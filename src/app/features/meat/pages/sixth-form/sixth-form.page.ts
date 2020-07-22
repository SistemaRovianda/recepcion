import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicFormComponent } from '../../components/forms/basic-form/basic-form.component';
import { FridgeFormComponent } from '../../components/forms/fridge-form/fridge-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { AdditionalInformation } from 'src/app/shared/models/meat.interface';
import {
  addSlaughterDateData,
  addFridgeData,
} from '../../store/meat/meat.actions';

@Component({
  selector: 'app-sixth-form',
  templateUrl: './sixth-form.page.html',
  styleUrls: ['./sixth-form.page.scss'],
})
export class SixthFormPage implements OnInit {
  @ViewChild('slaughterDateForm', { static: false })
  slaughterDateForm: BasicFormComponent;

  @ViewChild('fridgeForm', { static: false })
  fridgeForm: FridgeFormComponent;

  constructor(private _router: Router, private _store: Store<AppState>) {}

  ngOnInit() {}

  onSubmitSlaughterDate(evt: AdditionalInformation) {
    this._store.dispatch(addSlaughterDateData({ slaughterDate: evt }));
  }

  onSubmitFridge(evt: AdditionalInformation) {
    this._store.dispatch(
      addFridgeData({
        fridge: { ...evt, fridgeId: +evt.fridgeId, accepted: true },
      })
    );
  }

  onNextPage(evt) {
    this.slaughterDateForm.onSubmitForm();
    this.fridgeForm.onSubmitForm();
    this._router.navigate(['meat', 'seventh-form-meat']);
  }
}
