import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicFormComponent } from '../../components/forms/basic-form/basic-form.component';

@Component({
  selector: 'app-fourth-form',
  templateUrl: './fourth-form.page.html',
  styleUrls: ['./fourth-form.page.scss'],
})
export class FourthFormPage implements OnInit {
  @ViewChild('packingForm', { static: false }) packingForm: BasicFormComponent;

  @ViewChild('odorForm', { static: false }) odorForm: BasicFormComponent;

  constructor(private _router: Router) {}

  ngOnInit() {}

  onSubmitPacking(evt) {
    console.info('packing: ', evt);
  }

  onSubmitOdor(evt) {
    console.info('Odor: ', evt);
  }

  onNextPage(evt) {
    this.packingForm.onSubmitForm();
    this.odorForm.onSubmitForm();
    this._router.navigate(['meat', 'fifth-form-meat']);
  }
}
