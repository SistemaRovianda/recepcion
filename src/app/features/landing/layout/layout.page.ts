import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/shared/models/app-state.interface";
import { Store } from "@ngrx/store";
import { signIn } from "../store/login/login.action";
import { Observable } from 'rxjs';
import { SELECT_IS_LOADING, SELECT_LOGIN_ERROR } from '../store/login/login.selector';

@Component({
  selector: "app-layout",
  templateUrl: "./layout.page.html",
  styleUrls: ["./layout.page.scss"],
})
export class LayoutPage implements OnInit {



  constructor(private _store: Store<AppState>) {
    // this.isLoadingLogin = this._store.select(SELECT_IS_LOADING);
    // this.isErrorLogin = this._store.select(SELECT_LOGIN_ERROR);
  }

  ngOnInit() {}

  onLogin(form) {
    this._store.dispatch(signIn(form));
  }
}
