import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.scss'],
})
export class CheckFormComponent implements OnInit {
  @Input() title: string;

  @Input() subtitle: string;

  @Output('submitCheck') submit = new EventEmitter();

  form: FormControl;

  constructor() {
    this.form = new FormControl('', Validators.required);
  }

  ngOnInit() {}

  onFocus(evt) {
    console.log('evento activado: ', this.form.value);
    this.submit.emit(this.form.value);
  }
}
