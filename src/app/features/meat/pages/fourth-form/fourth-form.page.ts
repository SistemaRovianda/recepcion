import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from 'src/app/shared/models/app-state.interface';
import {
  addPackingData,
  addOdorData,
  addExpirationData,
  addTransportData,
  addTextureData,
  addColorData,
  addStrageMaterialData,
} from '../../store/meat/meat.actions';
import { AdditionalInformation } from 'src/app/shared/models/meat.interface';
import { BasicCheckFormComponent } from '../../components/forms/basic-check-form/basic-check-form.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-fourth-form',
  templateUrl: './fourth-form.page.html',
  styleUrls: ['./fourth-form.page.scss'],
})
export class FourthFormPage implements OnInit {
  @ViewChild('strangeMaterialForm', { static: false })
  strangeMaterialForm: BasicCheckFormComponent;

  @ViewChild('expirationForm', { static: false })
  expirationForm: BasicCheckFormComponent;

  @ViewChild('packingForm', { static: false })
  packingForm: BasicCheckFormComponent;

  @ViewChild('odorForm', { static: false }) odorForm: BasicCheckFormComponent;

  @ViewChild('transportForm', { static: false })
  transportForm: BasicCheckFormComponent;

  @ViewChild('textureForm', { static: false })
  textureForm: BasicCheckFormComponent;

  @ViewChild('colorForm', { static: false }) colorForm: BasicCheckFormComponent;

  constructor(private _router: Router, private _store: Store<AppState>) {}

  ngOnInit() {}

  onSubmitStrageMaterial(evt: AdditionalInformation) {
    console.log('materia extra ', evt);
    this._store.dispatch(addStrageMaterialData({ strageMaterial: evt }));
  }

  onSubmitExpiration(evt: AdditionalInformation) {
    this._store.dispatch(addExpirationData({ expiration: evt }));
  }

  onSubmitPacking(evt: AdditionalInformation) {
    this._store.dispatch(addPackingData({ packing: evt }));
  }

  onSubmitOdor(evt: AdditionalInformation) {
    this._store.dispatch(addOdorData({ odor: evt }));
  }

  onSubmitTransport(evt: AdditionalInformation) {
    this._store.dispatch(addTransportData({ transport: evt }));
  }

  onSubmitTexture(evt: AdditionalInformation) {
    this._store.dispatch(addTextureData({ texture: evt }));
  }

  onSubmitColor(evt: AdditionalInformation) {
    this._store.dispatch(addColorData({ color: evt }));
  }

  onBack(evt) {
    this._router.navigate(['/meat/second-form-meat']);
  }

  onNextPage(evt) {
    this.strangeMaterialForm.onSubmitForm();
    this.expirationForm.onSubmitForm();
    this.packingForm.onSubmitForm();
    this.odorForm.onSubmitForm();
    this.transportForm.onSubmitForm();
    this.textureForm.onSubmitForm();
    this.colorForm.onSubmitForm();
    this._router.navigate(['meat', 'sixth-form-meat']);
  }
}
