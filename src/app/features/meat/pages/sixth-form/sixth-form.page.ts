import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sixth-form',
  templateUrl: './sixth-form.page.html',
  styleUrls: ['./sixth-form.page.scss'],
})
export class SixthFormPage implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  onNextPage(evt) {
    this._router.navigate(['meat', 'seventh-form-meat']);
  }
}
