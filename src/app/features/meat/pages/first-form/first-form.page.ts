import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FirstFormComponent } from '../../components/forms/first-form/first-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { addBasicInformation } from '../../store/meat/meat.actions';
import { BasicInformation } from 'src/app/shared/models/meat.interface';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.page.html',
  styleUrls: ['./first-form.page.scss'],
})
export class FirstFormPage implements OnInit {
  @ViewChild(FirstFormComponent, { static: false })
  firstForm: FirstFormComponent;

  constructor(private _router: Router, private _store: Store<AppState>) {}

  ngOnInit() {}

  onSubmit(evt: BasicInformation) {
    this._store.dispatch(addBasicInformation({ basicInformation: evt }));
  }

  onBack(evt) {
    this._router.navigate(['/menu/reception']);
  }

  onNextPage() {
    this.firstForm.onSubmitForm();
    this._router.navigate(['meat', 'second-form-meat']);
  }
}
