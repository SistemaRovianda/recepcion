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
    this.userJob = evt.detail.value.job;
  }

  onSubmit() {
    let finalForm: finalInformation = {
      ...this.form.value,
      qualityInspector: this.form.get('qualityInspector').value.userId,
    };
    this.submit.emit(finalForm);
  }

  getCamera() {
    this.camera
      .getPicture({
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
      })
      .then((res) => {
        this.imgURL = 'data:image/jpeg;base64,' + res;
        this.form.get('photo').setValue(res);
      })
      .catch((err) => {
        console.error('Error en la toma de fotografia');
        this.imgURL = 'data:image/jpeg;base64,' + `/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBAQERAQEBAQEBAQEBAQEBASDxAQFRIWFhURExUYHSggGBolHRMTITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIFBAMH/8QALRABAAECAwcDAwUBAAAAAAAAAAECEQMSIQQxQWFxgbEFQlGRodETMoLB4SP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJlX9am9s1N/i8XBcAAAAAAAAAAAAAAAAeWNO5lY01XmJmZ7g16sSmN8xHWYedW2Yce76XljgNOr1GjhEz9IeVXqU8KY7y4QHTVt+JPxHSPy8qtprn3T48PNAJmZnfeeqOfGNe4A2tlxs9MTx3THxL2Y2xY+SrX9tWk8p4S2QAAAAAAAAAAAAAAeWPw6uHbKPd2loYsXjpq5qqbxMfIMwWqi02VkAAESAAhICGt6dj5qbT+6nTrHCWUvg4s0VRVHDfzjiDdEU1RMRMbp1hIAAAAAAAAAAAADkmLafDreGPTuntIODbKNc3zvczSxaL0zDNyggWySnJzBQXywaAomy2fkZpBEUSn9NGYBoenYloyXvbWOUfH3dzJ9Nn/r/CfNLWAAAAAAAAAAAAAVrpvEwsA5OH2ln1Tq0saLTfhPll11RedQRdCJqRm5AuhW8o1BcmVbJsBmgvyRmh6U4VU7qKp7WB1+l4M3nEm26aYjvr4aTn2LDmmiImLTrNusugAAAAAAAAAAAAAAFMai8fdk7VEX6tl41bLhzN5piZ56gw7x/j0owK53UVfS3luU0RG6IjpCwMinYcSeER1n8PWn0yrjXHaP7aQDip9No4zVPe3h607Fhx7Inrr5dACtNERuiI6QsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z`;
        this.form.get('photo').setValue(`/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBAQERAQEBAQEBAQEBAQEBASDxAQFRIWFhURExUYHSggGBolHRMTITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIFBAMH/8QALRABAAECAwcDAwUBAAAAAAAAAAECEQMSIQQxQWFxgbEFQlGRodETMoLB4SP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJlX9am9s1N/i8XBcAAAAAAAAAAAAAAAAeWNO5lY01XmJmZ7g16sSmN8xHWYedW2Yce76XljgNOr1GjhEz9IeVXqU8KY7y4QHTVt+JPxHSPy8qtprn3T48PNAJmZnfeeqOfGNe4A2tlxs9MTx3THxL2Y2xY+SrX9tWk8p4S2QAAAAAAAAAAAAAAeWPw6uHbKPd2loYsXjpq5qqbxMfIMwWqi02VkAAESAAhICGt6dj5qbT+6nTrHCWUvg4s0VRVHDfzjiDdEU1RMRMbp1hIAAAAAAAAAAAADkmLafDreGPTuntIODbKNc3zvczSxaL0zDNyggWySnJzBQXywaAomy2fkZpBEUSn9NGYBoenYloyXvbWOUfH3dzJ9Nn/r/CfNLWAAAAAAAAAAAAAVrpvEwsA5OH2ln1Tq0saLTfhPll11RedQRdCJqRm5AuhW8o1BcmVbJsBmgvyRmh6U4VU7qKp7WB1+l4M3nEm26aYjvr4aTn2LDmmiImLTrNusugAAAAAAAAAAAAAAFMai8fdk7VEX6tl41bLhzN5piZ56gw7x/j0owK53UVfS3luU0RG6IjpCwMinYcSeER1n8PWn0yrjXHaP7aQDip9No4zVPe3h607Fhx7Inrr5dACtNERuiI6QsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z`);
    });
  }

  get photo() {
    return this.form.get('photo');
  }

  get qualityInspector() {
    return this.form.get('qualityInspector');
  }

  get job() {
    return this.form.get('job');
  }
}
