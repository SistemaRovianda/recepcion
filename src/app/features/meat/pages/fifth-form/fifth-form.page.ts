import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicFormComponent } from '../../components/forms/basic-form/basic-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { AdditionalInformation } from 'src/app/shared/models/meat.interface';
import {
  addTransportData,
  addTextureData,
} from '../../store/meat/meat.actions';

@Component({
  selector: 'app-fifth-form',
  templateUrl: './fifth-form.page.html',
  styleUrls: ['./fifth-form.page.scss'],
})
export class FifthFormPage implements OnInit {
  @ViewChild('transportForm', { static: false })
  transportForm: BasicFormComponent;

  @ViewChild('textureForm', { static: false }) textureForm: BasicFormComponent;

  constructor(private _router: Router, private _store: Store<AppState>) {}

  ngOnInit() {}

  onSubmitTransport(evt: AdditionalInformation) {
    this._store.dispatch(addTransportData({ transport: evt }));
  }

  onSubmitTexture(evt: AdditionalInformation) {
    this._store.dispatch(addTextureData({ texture: evt }));
  }

  onNextPage(evt) {
    this.transportForm.onSubmitForm();
    this.textureForm.onSubmitForm();
    this._router.navigate(['meat', 'sixth-form-meat']);
  }
}
