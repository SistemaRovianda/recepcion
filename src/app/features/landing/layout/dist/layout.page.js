"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LayoutPage = void 0;
var core_1 = require("@angular/core");
var login_action_1 = require("../store/login/login.action");
var LayoutPage = /** @class */ (function () {
    function LayoutPage(_store) {
        this._store = _store;
        // this.isLoadingLogin = this._store.select(SELECT_IS_LOADING);
        // this.isErrorLogin = this._store.select(SELECT_LOGIN_ERROR);
    }
    LayoutPage.prototype.ngOnInit = function () { };
    LayoutPage.prototype.onLogin = function (form) {
        this._store.dispatch(login_action_1.signIn(form));
    };
    LayoutPage = __decorate([
        core_1.Component({
            selector: "app-layout",
            templateUrl: "./layout.page.html",
            styleUrls: ["./layout.page.scss"]
        })
    ], LayoutPage);
    return LayoutPage;
}());
exports.LayoutPage = LayoutPage;
