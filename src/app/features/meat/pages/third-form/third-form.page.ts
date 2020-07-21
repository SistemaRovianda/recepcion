import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicFormComponent } from '../../components/forms/basic-form/basic-form.component';

@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.page.html',
  styleUrls: ['./third-form.page.scss'],
})
export class ThirdFormPage implements OnInit {
  @ViewChild('strageMaterialForm', { static: false })
  strageMaterialForm: BasicFormComponent;

  @ViewChild('expirationForm', { static: false })
  expirationForm: BasicFormComponent;

  constructor(private _router: Router) {}

  ngOnInit() {}

  onSubmitStrageMaterial(evt) {
    console.info('strangeMaterial: ', evt);
  }

  onSubmitStrageExpiration(evt) {
    console.info('expiration: ', evt);
  }

  onNextPage(evt) {
    this.strageMaterialForm.onSubmitForm();
    this.expirationForm.onSubmitForm();
    this._router.navigate(['meat', 'fourth-form-meat']);
  }
}
