import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicFormComponent } from '../../components/forms/basic-form/basic-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { AdditionalInformation } from 'src/app/shared/models/meat.interface';
import {
  addStrageMaterialData,
  addExpirationData,
} from '../../store/meat/meat.actions';

@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.page.html',
  styleUrls: ['./third-form.page.scss'],
})
export class ThirdFormPage implements OnInit {
  @ViewChild('strageMaterialForm', { static: false })
  strageMaterialForm: BasicFormComponent;

  @ViewChild('expirationForm', { static: false })
  expirationForm: BasicFormComponent;

  constructor(private _router: Router, private _store: Store<AppState>) {}

  ngOnInit() {}

  onSubmitStrageMaterial(evt: AdditionalInformation) {
    console.info('strangeMaterial: ', evt);
    this._store.dispatch(addStrageMaterialData({ strageMaterial: evt }));
  }

  onSubmitStrageExpiration(evt: AdditionalInformation) {
    console.info('expiration: ', evt);
    this._store.dispatch(addExpirationData({ expiration: evt }));
  }

  onNextPage(evt) {
    this.strageMaterialForm.onSubmitForm();
    this.expirationForm.onSubmitForm();
    this._router.navigate(['meat', 'fourth-form-meat']);
  }
}
