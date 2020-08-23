"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var white_space_validator_1 = require("src/app/shared/validators/white-space.validator");
var conts_1 = require("src/app/providers/conts");
var login_selector_1 = require("../../store/login/login.selector");
var store_validator_1 = require("src/app/shared/validators/store.validator");
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(_fb, _store) {
        this._fb = _fb;
        this._store = _store;
        this.submit = new core_1.EventEmitter();
        this.form = _fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email, white_space_validator_1.noWhiteSpace]],
            password: ['', [forms_1.Validators.required, white_space_validator_1.noWhiteSpace]]
        }, {
            asyncValidators: [
                store_validator_1.StoreValidator.hasStoreError(this._store.select(login_selector_1.SELECT_LOGIN_ERROR), 'loginError'),
            ]
        });
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.reset();
        this._store
            .select(login_selector_1.SELECT_IS_LOADING)
            .subscribe(function (res) { return (_this.loading = res); });
    };
    LoginFormComponent.prototype.translateError = function (errorMessage) {
        if (errorMessage == conts_1.ERROR_EMAIL_NOT_FOUND) {
            return 'Correo no registrado.';
        }
        if (errorMessage == conts_1.ERROR_PASSWORD_INVALID) {
            return 'Contraseña invalida.';
        }
        return 'Varios intentos fallidos, consulte con el administrador o intente mas tarde';
    };
    Object.defineProperty(LoginFormComponent.prototype, "email", {
        get: function () {
            return this.form.get('email');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginFormComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: false,
        configurable: true
    });
    LoginFormComponent.prototype.onSubmit = function () {
        this.submit.emit(this.form.value);
    };
    __decorate([
        core_1.Output('onSubmit')
    ], LoginFormComponent.prototype, "submit");
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: 'app-login-form',
            templateUrl: './login-form.component.html',
            styleUrls: ['./login-form.component.scss']
        })
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;
