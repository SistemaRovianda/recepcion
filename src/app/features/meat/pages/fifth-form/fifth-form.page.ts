import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicFormComponent } from '../../components/forms/basic-form/basic-form.component';

@Component({
  selector: 'app-fifth-form',
  templateUrl: './fifth-form.page.html',
  styleUrls: ['./fifth-form.page.scss'],
})
export class FifthFormPage implements OnInit {
  @ViewChild('transportForm', { static: false })
  transportForm: BasicFormComponent;

  @ViewChild('textureForm', { static: false }) textureForm: BasicFormComponent;

  constructor(private _router: Router) {}

  ngOnInit() {}

  onSubmitTransport(evt) {
    console.info('transport: ', evt);
  }

  onSubmitTexture(evt) {
    console.info('texture: ', evt);
  }

  onNextPage(evt) {
    this.transportForm.onSubmitForm();
    this.textureForm.onSubmitForm();
    this._router.navigate(['meat', 'sixth-form-meat']);
  }
}
