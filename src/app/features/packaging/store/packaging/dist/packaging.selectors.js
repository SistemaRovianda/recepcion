"use strict";
exports.__esModule = true;
exports.packagingLoadingSelector = exports.valuePackingQuantitySelector = exports.entryPackagingSelector = void 0;
var store_1 = require("@ngrx/store");
var ENTRY_PACKAGING_STATE = function (state) { return state.packaging; };
exports.entryPackagingSelector = store_1.createSelector(ENTRY_PACKAGING_STATE, function (state) { return state.entryPackaging; });
exports.valuePackingQuantitySelector = store_1.createSelector(ENTRY_PACKAGING_STATE, function (state) { return state.entryPackaging.quantity; });
exports.packagingLoadingSelector = store_1.createSelector(ENTRY_PACKAGING_STATE, function (state) { return state.loading; });
