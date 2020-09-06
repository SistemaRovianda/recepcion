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
exports.driedReducer = void 0;
var store_1 = require("@ngrx/store");
var dried_actions_1 = require("./dried.actions");
var initialState = {
    loading: false,
    entryDried: null,
    error: null
};
var _driedReducer = store_1.createReducer(initialState, store_1.on(dried_actions_1.addBasicInformationDried, function (state, _a) {
    var basicInformation = _a.basicInformation;
    return (__assign(__assign({}, state), { entryDried: __assign({}, basicInformation) }));
}), store_1.on(dried_actions_1.addFirstAdditionalInformationDried, function (state, _a) {
    var firstAdditionalInformation = _a.firstAdditionalInformation;
    return (__assign(__assign({}, state), { entryDried: __assign(__assign({}, state.entryDried), firstAdditionalInformation) }));
}), store_1.on(dried_actions_1.addSecondAdditionalInformationDried, function (state, _a) {
    var secondAdditionalInformation = _a.secondAdditionalInformation;
    return (__assign(__assign({}, state), { entryDried: __assign(__assign({}, state.entryDried), secondAdditionalInformation) }));
}), store_1.on(dried_actions_1.saveEntryDriedSuccess, function (state) { return (__assign(__assign({}, state), { loading: true })); }), store_1.on(dried_actions_1.saveEntryDriedError, function (state) { return (__assign(__assign({}, state), { loading: false })); }), store_1.on(dried_actions_1.clearEntryDried, function (state) { return (__assign(__assign({}, state), { entryDried: null, error: null })); }));
function driedReducer(state, action) {
    return _driedReducer(state, action);
}
exports.driedReducer = driedReducer;
