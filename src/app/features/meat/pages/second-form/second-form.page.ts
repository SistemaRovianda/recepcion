import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicFormComponent } from '../../components/forms/basic-form/basic-form.component';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.page.html',
  styleUrls: ['./second-form.page.scss'],
})
export class SecondFormPage implements OnInit {
  @ViewChild('tempForm', { static: false })
  basicTemperatureForm: BasicFormComponent;

  @ViewChild('weightForm', { static: false })
  basicWeightForm: BasicFormComponent;

  constructor(private _router: Router) {}

  ngOnInit() {}

  onSubmitTemperature(evt) {
    console.info('Temperature: ', evt);
  }

  onSubmitWeight(evt) {
    console.info('Weight: ', evt);
  }

  onNextPage(evt) {
    this.basicTemperatureForm.onSubmitForm();
    this.basicWeightForm.onSubmitForm();
    this._router.navigate(['meat', 'third-form-meat']);
  }
}
