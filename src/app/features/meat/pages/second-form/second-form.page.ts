import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.page.html',
  styleUrls: ['./second-form.page.scss'],
})
export class SecondFormPage implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  onNextPage(evt) {
    this._router.navigate(['meat', 'third-form-meat']);
  }
}
