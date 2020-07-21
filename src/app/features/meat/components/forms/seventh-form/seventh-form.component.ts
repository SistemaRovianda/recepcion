import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'seventh-form',
  templateUrl: './seventh-form.component.html',
  styleUrls: ['./seventh-form.component.scss'],
})
export class SeventhFormComponent implements OnInit {
  form: FormGroup;

  imgURL: string;

  @Output('onSubmit') submit = new EventEmitter();

  constructor(private fb: FormBuilder, private camera: Camera) {
    this.form = fb.group({
      photo: ['', Validators.required],
      qualityInspector: ['', Validators.required],
      job: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.submit.emit(this.form.value);
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
      })
      .catch((err) => console.error('Error en la toma de fotografia'));
  }
}
