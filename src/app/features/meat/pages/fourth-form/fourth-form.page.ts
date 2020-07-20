import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fourth-form',
  templateUrl: './fourth-form.page.html',
  styleUrls: ['./fourth-form.page.scss'],
})
export class FourthFormPage implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  onNextPage(evt) {
    this._router.navigate(['meat', 'fifth-form-meat']);
  }
}
