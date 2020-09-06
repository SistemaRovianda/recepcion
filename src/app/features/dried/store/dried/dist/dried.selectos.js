"use strict";
exports.__esModule = true;
exports.entryDriedLoadingSelector = exports.entryDriedSelector = void 0;
var store_1 = require("@ngrx/store");
var ENTRY_DRIED_STATE = function (state) { return state.dried; };
exports.entryDriedSelector = store_1.createSelector(ENTRY_DRIED_STATE, function (state) { return state.entryDried; });
exports.entryDriedLoadingSelector = store_1.createSelector(ENTRY_DRIED_STATE, function (state) { return state.loading; });
