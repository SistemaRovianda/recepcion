import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CheckFormComponent } from '../check-form/check-form.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { Observable } from 'rxjs';
import { UserRegistered } from 'src/app/shared/models/user.interface';
import { SELECT_USERS_REGISTERED } from 'src/app/shared/store/usersRegistered/users-registered.selectors';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss'],
})
export class SecondFormComponent implements OnInit {
  form: FormGroup;

  @ViewChild('qualityForm', { static: false }) qualityForm: CheckFormComponent;

  @ViewChild('strageMaterialForm', { static: false })
  strageMaterialForm: CheckFormComponent;

  @ViewChild('transportForm', { static: false })
  transportForm: CheckFormComponent;

  @ViewChild('isPzForm', { static: false }) isPzForm: CheckFormComponent;

  @Output('onSubmit') submit = new EventEmitter();

  users$: Observable<UserRegistered[]>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private _storage: Storage
  ) {
    this.form = fb.group({
      quality: ['', Validators.required],
      strageMaterial: ['', Validators.required],
      transport: ['', Validators.required],
      paking: ['', Validators.required],
      makeId: ['', Validators.required],
      verifitId: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.setUser();
    this.users$ = this.store.select(SELECT_USERS_REGISTERED);
  }

  onQualitySubmit(evt) {
    console.log('se coloca quantity en formulario');
    this.form.get('quality').setValue(evt);
  }

  onStrageMaterialSubmit(evt) {
    console.log('se coloca strageMaterial en formulario');
    this.form.get('strageMaterial').setValue(evt);
  }

  onTransportSubmit(evt) {
    console.log('se coloca onTransport en formulario');
    this.form.get('transport').setValue(evt);
  }

  onPakingSubmit(evt) {
    this.form.get('paking').setValue(evt);
  }

  onSubmitForm() {
    console.log('se emite formulario completo: ', this.form.value);
    this.submit.emit(this.form.value);
  }

  setUser() {
    this._storage.get('uid').then((res) => {
      this.form.get('makeId').setValue(res);
    });
    // this.form.get('makeId').setValue('djasdkas');
  }

  get quality() {
    return this.form.get('quality');
  }

  get strageMaterial() {
    return this.form.get('strageMaterial');
  }

  get transport() {
    return this.form.get('transport');
  }

  get paking() {
    return this.form.get('paking');
  }

  get makeId() {
    return this.form.get('makeId');
  }

  get verifitId() {
    return this.form.get('verifitId');
  }
}
