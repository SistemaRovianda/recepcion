import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.page.html',
  styleUrls: ['./first-form.page.scss'],
})
export class FirstFormPage implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  onBack(evt) {
    this._router.navigate(['/menu/reception']);
  }

  onNextPage() {
    this._router.navigate(['meat', 'second-form-meat']);
  }
}
