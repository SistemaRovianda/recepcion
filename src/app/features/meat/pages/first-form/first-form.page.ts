import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FirstFormComponent } from '../../components/forms/first-form/first-form.component';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.page.html',
  styleUrls: ['./first-form.page.scss'],
})
export class FirstFormPage implements OnInit {
  @ViewChild(FirstFormComponent, { static: false })
  firstForm: FirstFormComponent;

  constructor(private _router: Router) {}

  ngOnInit() {}

  onSubmit(event) {
    console.info('firstForm: ', event);
  }

  onBack(evt) {
    this._router.navigate(['/menu/reception']);
  }

  onNextPage() {
    this.firstForm.onSubmitForm();
    this._router.navigate(['meat', 'second-form-meat']);
  }
}
