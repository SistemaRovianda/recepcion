import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { noWhiteSpace } from "src/app/shared/validators/white-space.validator";
import {
  ERROR_EMAIL_NOT_FOUND,
  ERROR_PASSWORD_INVALID,
} from "src/app/providers/conts";
import {
  SELECT_LOGIN_ERROR,
  SELECT_IS_LOADING,
} from "../../store/login/login.selector";
import { StoreValidator } from "src/app/shared/validators/store.validator";
import { AppState } from "src/app/shared/models/app-state.interface";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;

  loading: boolean;

  @Output("onSubmit") submit = new EventEmitter();

  constructor(private _fb: FormBuilder, private _store: Store<AppState>) {
    this.form = _fb.group(
      {
        email: ["", [Validators.required, Validators.email, noWhiteSpace]],
        password: ["", [Validators.required, noWhiteSpace]],
      },
      {
        asyncValidators: [
          StoreValidator.hasStoreError(
            this._store.select(SELECT_LOGIN_ERROR),
            "loginError"
          ),
        ],
      }
    );
  }

  ngOnInit() {
    this._store
      .select(SELECT_IS_LOADING)
      .subscribe((res) => (this.loading = res));
  }

  translateError(errorMessage: string): string {
    if (errorMessage == ERROR_EMAIL_NOT_FOUND) {
      return "Correo no registrado.";
    }
    if (errorMessage == ERROR_PASSWORD_INVALID) {
      return "Contraseña invalida.";
    }
    return "Varios intentos fallidos, consulte con el administrador o intente mas tarde";
  }

  get email() {
    return this.form.get("email");
  }

  get password() {
    return this.form.get("password");
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }
}
