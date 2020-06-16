import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/shared/models/app-state.interface";
import { Store } from "@ngrx/store";
import { signIn } from "../store/login/login.action";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.page.html",
  styleUrls: ["./layout.page.scss"],
})
export class LayoutPage implements OnInit {
  constructor(private _store: Store<AppState>) {}

  ngOnInit() {}

  onLogin(form) {
    this._store.dispatch(signIn(form));
  }
}
