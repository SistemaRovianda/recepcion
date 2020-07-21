import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicFormComponent } from '../../components/forms/basic-form/basic-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import {
  addTemperatureData,
  addWeightData,
} from '../../store/meat/meat.actions';
import { AdditionalInformation } from 'src/app/shared/models/meat.interface';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.page.html',
  styleUrls: ['./second-form.page.scss'],
})
export class SecondFormPage implements OnInit {
  @ViewChild('tempForm', { static: false })
  basicTemperatureForm: BasicFormComponent;

  @ViewChild('weightForm', { static: false })
  basicWeightForm: BasicFormComponent;

  constructor(private _router: Router, private _store: Store<AppState>) {}

  ngOnInit() {}

  onSubmitTemperature(evt: AdditionalInformation) {
    console.info('Temperature: ', evt);
    let temperature: AdditionalInformation = {
      value: evt.value,
      description: evt.observations,
      accepted: evt.accepted,
    };
    this._store.dispatch(addTemperatureData({ temperature: temperature }));
  }

  onSubmitWeight(evt: AdditionalInformation) {
    console.info('Weight: ', evt);
    this._store.dispatch(addWeightData({ weight: evt }));
  }

  onNextPage(evt) {
    this.basicTemperatureForm.onSubmitForm();
    this.basicWeightForm.onSubmitForm();
    this._router.navigate(['meat', 'third-form-meat']);
  }
}
