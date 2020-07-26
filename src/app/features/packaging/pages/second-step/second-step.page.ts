import { Component, OnInit, ViewChild } from '@angular/core';
import { SecondFormComponent } from '../../components/forms/second-form/second-form.component';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.page.html',
  styleUrls: ['./second-step.page.scss'],
})
export class SecondStepPage implements OnInit {
  @ViewChild('form', { static: false }) form: SecondFormComponent;

  constructor() {}

  ngOnInit() {}

  onSubmit(evt) {
    console.log('Segundo formulario: ', evt);
  }

  onSave() {
    this.form.onSubmitForm();
  }
}
