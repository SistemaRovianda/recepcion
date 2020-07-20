import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fifth-form',
  templateUrl: './fifth-form.page.html',
  styleUrls: ['./fifth-form.page.scss'],
})
export class FifthFormPage implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  onNextPage(evt) {
    this._router.navigate(['meat', 'sixth-form-meat']);
  }
}
