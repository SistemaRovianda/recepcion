import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-form',
  templateUrl: './third-form.page.html',
  styleUrls: ['./third-form.page.scss'],
})
export class ThirdFormPage implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  onNextPage(evt) {
    this._router.navigate(['meat', 'fourth-form-meat']);
  }
}
