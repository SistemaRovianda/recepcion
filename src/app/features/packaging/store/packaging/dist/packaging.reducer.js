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
exports.packagingReducer = void 0;
var store_1 = require("@ngrx/store");
var packaging_actions_1 = require("./packaging.actions");
var initialState = {
    loading: false,
    entryPackaging: null,
    error: null
};
var _packagingReducer = store_1.createReducer(initialState, store_1.on(packaging_actions_1.addBasicInformationPackaging, function (state, _a) {
    var basicInformation = _a.basicInformation;
    return (__assign(__assign({}, state), { entryPackaging: __assign({}, basicInformation) }));
}), store_1.on(packaging_actions_1.addAdditionalInformationPackaging, function (state, _a) {
    var selectionInformation = _a.selectionInformation;
    return (__assign(__assign({}, state), { entryPackaging: __assign(__assign({}, state.entryPackaging), selectionInformation) }));
}), store_1.on(packaging_actions_1.addReviewersInformationPackaging, function (state, _a) {
    var reviewersInformation = _a.reviewersInformation;
    return (__assign(__assign({}, state), { entryPackaging: __assign(__assign({}, state.entryPackaging), reviewersInformation) }));
}), store_1.on(packaging_actions_1.saveEntryPackagingSuccess, function (state) { return (__assign(__assign({}, state), { loading: true })); }), store_1.on(packaging_actions_1.saveEntryPackagingError, function (state) { return (__assign(__assign({}, state), { loading: false })); }), store_1.on(packaging_actions_1.clearEntryPackaging, function (state) { return (__assign(__assign({}, state), { entryPackaging: null })); }));
function packagingReducer(state, action) {
    return _packagingReducer(state, action);
}
exports.packagingReducer = packagingReducer;
