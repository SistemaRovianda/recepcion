"use strict";
exports.__esModule = true;
exports.meatLoadingSelector = exports.meatSelector = void 0;
var store_1 = require("@ngrx/store");
var MEAT_STATE = function (state) { return state.meat; };
exports.meatSelector = store_1.createSelector(MEAT_STATE, function (state) { return state.entryMeat; });
exports.meatLoadingSelector = store_1.createSelector(MEAT_STATE, function (state) { return state.loadind; });
