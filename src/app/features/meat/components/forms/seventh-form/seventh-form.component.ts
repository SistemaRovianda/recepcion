import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'seventh-form',
  templateUrl: './seventh-form.component.html',
  styleUrls: ['./seventh-form.component.scss'],
})
export class SeventhFormComponent implements OnInit {
  form: FormGroup;

  @Output('onSubmit') submit = new EventEmitter();

  constructor(private fb: FormBuilder) {
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

  openCamera() {
    console.log('Abrir camara');
  }
}
