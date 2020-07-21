import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Camera } from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs';
import { UserRegistered } from 'src/app/shared/models/user.interface';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { Store } from '@ngrx/store';
import { SELECT_USERS_REGISTERED } from 'src/app/shared/store/usersRegistered/users-registered.selectors';
import { finalInformation } from 'src/app/shared/models/meat.interface';

@Component({
  selector: 'seventh-form',
  templateUrl: './seventh-form.component.html',
  styleUrls: ['./seventh-form.component.scss'],
})
export class SeventhFormComponent implements OnInit {
  form: FormGroup;

  imgURL: string;

  users$: Observable<UserRegistered[]>;

  userJob: string;

  @Output('onSubmit') submit = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private camera: Camera,
    private _store: Store<AppState>
  ) {
    this.form = fb.group({
      photo: ['', Validators.required],
      qualityInspector: ['', Validators.required],
      job: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.users$ = this._store.select(SELECT_USERS_REGISTERED);
  }

  onUserSelected(evt) {
    console.log('selecciono usuario: ', evt);
    this.userJob = evt.detail.value.job;
  }

  onSubmit() {
    console.log('ultimo', this.form.value);
    this.form.get('photo').setValue('imagen');

    let finalForm: finalInformation = {
      ...this.form.value,
      qualityInspector: this.form.get('qualityInspector').value.fullName,
    };
    this.submit.emit(finalForm);
  }

  getCamera() {
    this.camera
      .getPicture({
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
      })
      .then((res) => {
        this.imgURL = 'data:image/jpeg;base64,' + res;
        this.form.get('photo').setValue(this.imgURL);
      })
      .catch((err) => console.error('Error en la toma de fotografia'));
  }
}
