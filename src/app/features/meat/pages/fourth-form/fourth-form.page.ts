import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicFormComponent } from '../../components/forms/basic-form/basic-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { addPackingData, addOdorData } from '../../store/meat/meat.actions';
import { AdditionalInformation } from 'src/app/shared/models/meat.interface';
import { BasicCheckFormComponent } from '../../components/forms/basic-check-form/basic-check-form.component';

@Component({
  selector: 'app-fourth-form',
  templateUrl: './fourth-form.page.html',
  styleUrls: ['./fourth-form.page.scss'],
})
export class FourthFormPage implements OnInit {
  @ViewChild('strangeMaterialForm', { static: false }) strangeMaterialForm: BasicCheckFormComponent;

  @ViewChild('odorForm', { static: false }) odorForm: BasicFormComponent;

  constructor(private _router: Router, private _store: Store<AppState>) {}

  ngOnInit() {}

  onSubmitStrageMaterial(evt: AdditionalInformation) {
    console.log("materia extra ", evt);
    // this._store.dispatch(addPackingData({ packing: evt }));
  }

  onSubmitOdor(evt: AdditionalInformation) {
    this._store.dispatch(addOdorData({ odor: evt }));
  }

  onBack(evt) {
    this._router.navigate(['/meat/third-form-meat']);
  }

  onNextPage(evt) {
    this.strangeMaterialForm.onSubmitForm();
    this.odorForm.onSubmitForm();
    this._router.navigate(['meat', 'fifth-form-meat']);
  }
}
