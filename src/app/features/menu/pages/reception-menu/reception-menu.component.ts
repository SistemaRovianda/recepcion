import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/models/app-state.interface';
import { signOut } from 'src/app/features/landing/store/login/login.action';

@Component({
  selector: 'app-reception-menu',
  templateUrl: './reception-menu.component.html',
  styleUrls: ['./reception-menu.component.scss'],
})
export class ReceptionMenuComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  logout(evt) {
    this.store.dispatch(signOut());
  }
}
