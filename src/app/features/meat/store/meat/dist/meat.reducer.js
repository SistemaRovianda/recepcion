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
exports.meatReducer = void 0;
var store_1 = require("@ngrx/store");
var meat_actions_1 = require("./meat.actions");
var initialState = {
    loadind: false,
    entryMeat: null,
    error: null
};
var _meatReducer = store_1.createReducer(initialState, store_1.on(meat_actions_1.addBasicInformation, function (state, _a) {
    var basicInformation = _a.basicInformation;
    return (__assign(__assign({}, state), { entryMeat: __assign({}, basicInformation) }));
}), store_1.on(meat_actions_1.addTemperatureData, function (state, _a) {
    var temperature = _a.temperature;
    return (__assign(__assign({}, state), { entryMeat: __assign(__assign({}, state.entryMeat), { temperature: __assign({}, temperature) }) }));
}), store_1.on(meat_actions_1.addWeightData, function (state, _a) {
    var weight = _a.weight;
    return (__assign(__assign({}, state), { entryMeat: __assign(__assign({}, state.entryMeat), { temperature: __assign({}, state.entryMeat.temperature), weight: __assign({}, weight) }) }));
}), store_1.on(meat_actions_1.addStrageMaterialData, function (state, _a) {
    var strageMaterial = _a.strageMaterial;
    return (__assign(__assign({}, state), { entryMeat: __assign(__assign({}, state.entryMeat), { temperature: __assign({}, state.entryMeat.temperature), weight: __assign({}, state.entryMeat.weight), strageMaterial: __assign({}, strageMaterial) }) }));
}), store_1.on(meat_actions_1.addExpirationData, function (state, _a) {
    var expiration = _a.expiration;
    return (__assign(__assign({}, state), { entryMeat: __assign(__assign({}, state.entryMeat), { temperature: __assign({}, state.entryMeat.temperature), weight: __assign({}, state.entryMeat.weight), strageMaterial: __assign({}, state.entryMeat.strageMaterial), expiration: __assign({}, expiration) }) }));
}), store_1.on(meat_actions_1.addPackingData, function (state, _a) {
    var packing = _a.packing;
    return (__assign(__assign({}, state), { entryMeat: __assign(__assign({}, state.entryMeat), { temperature: __assign({}, state.entryMeat.temperature), weight: __assign({}, state.entryMeat.weight), strageMaterial: __assign({}, state.entryMeat.strageMaterial), expiration: __assign({}, state.entryMeat.expiration), packing: __assign({}, packing) }) }));
}), store_1.on(meat_actions_1.addOdorData, function (state, _a) {
    var odor = _a.odor;
    return (__assign(__assign({}, state), { entryMeat: __assign(__assign({}, state.entryMeat), { temperature: __assign({}, state.entryMeat.temperature), weight: __assign({}, state.entryMeat.weight), strageMaterial: __assign({}, state.entryMeat.strageMaterial), expiration: __assign({}, state.entryMeat.expiration), packing: __assign({}, state.entryMeat.packing), odor: __assign({}, odor) }) }));
}), store_1.on(meat_actions_1.addTransportData, function (state, _a) {
    var transport = _a.transport;
    return (__assign(__assign({}, state), { entryMeat: __assign(__assign({}, state.entryMeat), { temperature: __assign({}, state.entryMeat.temperature), weight: __assign({}, state.entryMeat.weight), strageMaterial: __assign({}, state.entryMeat.strageMaterial), expiration: __assign({}, state.entryMeat.expiration), packing: __assign({}, state.entryMeat.packing), odor: __assign({}, state.entryMeat.odor), transport: __assign({}, transport) }) }));
}), store_1.on(meat_actions_1.addTextureData, function (state, _a) {
    var texture = _a.texture;
    return (__assign(__assign({}, state), { entryMeat: __assign(__assign({}, state.entryMeat), { temperature: __assign({}, state.entryMeat.temperature), weight: __assign({}, state.entryMeat.weight), strageMaterial: __assign({}, state.entryMeat.strageMaterial), expiration: __assign({}, state.entryMeat.expiration), packing: __assign({}, state.entryMeat.packing), odor: __assign({}, state.entryMeat.odor), transport: __assign({}, state.entryMeat.transport), texture: __assign({}, texture) }) }));
}), store_1.on(meat_actions_1.addColorData, function (state, _a) {
    var color = _a.color;
    return (__assign(__assign({}, state), { entryMeat: __assign(__assign({}, state.entryMeat), { temperature: __assign({}, state.entryMeat.temperature), weight: __assign({}, state.entryMeat.weight), strageMaterial: __assign({}, state.entryMeat.strageMaterial), expiration: __assign({}, state.entryMeat.expiration), packing: __assign({}, state.entryMeat.packing), odor: __assign({}, state.entryMeat.odor), transport: __assign({}, state.entryMeat.transport), texture: __assign({}, state.entryMeat.texture), color: __assign({}, color) }) }));
}), store_1.on(meat_actions_1.addFridgeData, function (state, _a) {
    var fridge = _a.fridge;
    return (__assign(__assign({}, state), { entryMeat: __assign(__assign({}, state.entryMeat), { temperature: __assign({}, state.entryMeat.temperature), weight: __assign({}, state.entryMeat.weight), strageMaterial: __assign({}, state.entryMeat.strageMaterial), expiration: __assign({}, state.entryMeat.expiration), packing: __assign({}, state.entryMeat.packing), odor: __assign({}, state.entryMeat.odor), transport: __assign({}, state.entryMeat.transport), texture: __assign({}, state.entryMeat.texture), color: __assign({}, state.entryMeat.color), fridge: __assign({}, fridge) }) }));
}), store_1.on(meat_actions_1.addSlaughterDateData, function (state, _a) {
    var slaughterDate = _a.slaughterDate;
    return (__assign(__assign({}, state), { entryMeat: __assign(__assign({}, state.entryMeat), { temperature: __assign({}, state.entryMeat.temperature), weight: __assign({}, state.entryMeat.weight), strageMaterial: __assign({}, state.entryMeat.strageMaterial), expiration: __assign({}, state.entryMeat.expiration), packing: __assign({}, state.entryMeat.packing), odor: __assign({}, state.entryMeat.odor), transport: __assign({}, state.entryMeat.transport), texture: __assign({}, state.entryMeat.texture), color: __assign({}, state.entryMeat.color), fridge: __assign({}, state.entryMeat.fridge), slaughterDate: __assign({}, slaughterDate) }) }));
}), store_1.on(meat_actions_1.addFinalData, function (state, _a) {
    var final = _a.final;
    return (__assign(__assign({}, state), { entryMeat: __assign(__assign(__assign({}, state.entryMeat), { temperature: __assign({}, state.entryMeat.temperature), weight: __assign({}, state.entryMeat.weight), strageMaterial: __assign({}, state.entryMeat.strageMaterial), expiration: __assign({}, state.entryMeat.expiration), packing: __assign({}, state.entryMeat.packing), odor: __assign({}, state.entryMeat.odor), transport: __assign({}, state.entryMeat.transport), texture: __assign({}, state.entryMeat.texture), color: __assign({}, state.entryMeat.color), fridge: __assign({}, state.entryMeat.fridge), slaughterDate: __assign({}, state.entryMeat.slaughterDate) }), final) }));
}), store_1.on(meat_actions_1.saveEntryMeat, function (state) { return (__assign(__assign({}, state), { loadind: true })); }), store_1.on(meat_actions_1.saveEntryMeatSuccess, function (state) { return (__assign(__assign({}, state), { loadind: false })); }), store_1.on(meat_actions_1.saveEntryMeatError, function (state) { return (__assign(__assign({}, state), { loadind: false })); }), store_1.on(meat_actions_1.clearEntryMeat, function (state) { return (__assign(__assign({}, state), { entryMeat: null, error: null })); }));
function meatReducer(state, action) {
    return _meatReducer(state, action);
}
exports.meatReducer = meatReducer;
