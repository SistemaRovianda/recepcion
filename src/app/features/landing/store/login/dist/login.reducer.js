"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.loginReducer = void 0;
var store_1 = require("@ngrx/store");
var fromLoginActions = require("./login.action");
var STATE_INITIAL_LOGIN = { error: null, loading: false };
exports.loginReducer = store_1.createReducer(STATE_INITIAL_LOGIN, store_1.on(fromLoginActions.signIn, function (state) { return (__assign(__assign({}, state), { loading: true })); }), store_1.on(fromLoginActions.finishLoad, function (state) { return (__assign(__assign({}, state), { loading: false })); }), store_1.on(fromLoginActions.signInSuccess, function (state) { return (__assign(__assign({}, state), { error: null })); }), store_1.on(fromLoginActions.signInFailure, function (state, _a) {
    var error = _a.error;
    return (__assign(__assign({}, state), { loading: false, error: error }));
}));
