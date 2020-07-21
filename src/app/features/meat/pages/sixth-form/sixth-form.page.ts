import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicFormComponent } from '../../components/forms/basic-form/basic-form.component';
import { FridgeFormComponent } from '../../components/forms/fridge-form/fridge-form.component';

@Component({
  selector: 'app-sixth-form',
  templateUrl: './sixth-form.page.html',
  styleUrls: ['./sixth-form.page.scss'],
})
export class SixthFormPage implements OnInit {
  @ViewChild('slaughterDateForm', { static: false })
  slaughterDateForm: BasicFormComponent;

  @ViewChild('fridgeForm', { static: false })
  fridgeForm: FridgeFormComponent;

  constructor(private _router: Router) {}

  ngOnInit() {}

  onSubmitSlaughterDate(evt) {
    console.info('slaughterDate: ', evt);
  }

  onSubmitFridge(evt) {
    console.info('fridge: ', evt);
  }

  onNextPage(evt) {
    this.slaughterDateForm.onSubmitForm();
    this.fridgeForm.onSubmitForm();
    this._router.navigate(['meat', 'seventh-form-meat']);
  }
}
