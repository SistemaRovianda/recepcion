import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { UserRegistered } from 'src/app/shared/models/user.interface';
import { SELECT_USERS_REGISTERED } from 'src/app/shared/store/usersRegistered/users-registered.selectors';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.component.html',
  styleUrls: ['./third-form.component.scss'],
})
export class ThirdFormComponent implements OnInit {
  form: FormGroup;

  @Output('onSubmit') submit = new EventEmitter();

  constructor(private fb: FormBuilder,private store:Store<AppState>,
    private _storage: Storage) {
    this.form = fb.group({
      color: ['', Validators.required],
      texture: ['', Validators.required],
      weight: ['', Validators.required],
      makeId: ['',Validators.required]
    });
  }

  users$: Observable<UserRegistered[]>;
  ngOnInit() {
    
    this.users$ = this.store.select(SELECT_USERS_REGISTERED);
  }

    get makeId() {
      return this.form.get('makeId');
    }

    selectUser(event:any){
      console.log("User: ",event.target.value);
      this.form.get("makeId").setValue(event.target.value);
    }
  
  onColorSubmit(evt) {
    this.form.get('color').setValue(evt);
  }

  onTextureSubmit(evt) {
    this.form.get('texture').setValue(evt);
  }

  onWeightSubmit(evt) {
    this.form.get('weight').setValue(evt);
  }

  onSubmitForm() {
    this.submit.emit(this.form.value);
  }

  get color() {
    return this.form.get('color');
  }

  get texture() {
    return this.form.get('texture');
  }

  get weight() {
    return this.form.get('weight');
  }
}
