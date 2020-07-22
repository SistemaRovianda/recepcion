import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicFormComponent } from '../../components/forms/basic-form/basic-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { addPackingData, addOdorData } from '../../store/meat/meat.actions';
import { AdditionalInformation } from 'src/app/shared/models/meat.interface';

@Component({
  selector: 'app-fourth-form',
  templateUrl: './fourth-form.page.html',
  styleUrls: ['./fourth-form.page.scss'],
})
export class FourthFormPage implements OnInit {
  @ViewChild('packingForm', { static: false }) packingForm: BasicFormComponent;

  @ViewChild('odorForm', { static: false }) odorForm: BasicFormComponent;

  constructor(private _router: Router, private _store: Store<AppState>) {}

  ngOnInit() {}

  onSubmitPacking(evt: AdditionalInformation) {
    this._store.dispatch(addPackingData({ packing: evt }));
  }

  onSubmitOdor(evt: AdditionalInformation) {
    this._store.dispatch(addOdorData({ odor: evt }));
  }

  onNextPage(evt) {
    this.packingForm.onSubmitForm();
    this.odorForm.onSubmitForm();
    this._router.navigate(['meat', 'fifth-form-meat']);
  }
}
