"use strict";
exports.__esModule = true;
exports.CustomValidators = void 0;
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.textAndNumbers = function (control) {
        var regex = /^[A-Z0-9ÑÁÉÍÓÚa-zñáéíóú,.-:/]*((\s)?([A-Z0-9ÑÁÉÍÓÚa-z-ñáéíóú,.-:/])+)*$/g;
        if (!regex.test(control.value)) {
            return {
                invalidCharacters: true
            };
        }
        return null;
    };
    CustomValidators.text = function (control) {
        var regex = /^[A-ZÑÁÉÍÓÚa-zñáéíóú,.-:/]+((\s)?([A-ZÑÁÉÍÓÚa-z-ñáéíóú,.-:/])+)*$/g;
        if (!regex.test(control.value)) {
            return {
                invalidText: true
            };
        }
        return null;
    };
    CustomValidators.integerForTemperature = function (control) {
        var regex = /1[1,2,3,4,5,6,7]$/g;
        if (regex.test(control.value)) {
            return {
                invalidTemp: true
            };
        }
        return null;
    };
    CustomValidators.integerForWeight = function (control) {
        var regex = /^([1-9]{1,5}|[1-9][0-9]{0,4}?.[0-9]{1,2}?)$/g;
        if (!regex.test(control.value)) {
            return {
                invalidWeight: true
            };
        }
        return null;
    };
    CustomValidators.integerNumber = function (control) {
        var regex = /^([1-9]{1,5}|[1-9][0-9]{0,4})$/g;
        if (!regex.test(control.value)) {
            return {
                invalidNumber: true
            };
        }
        return null;
    };
    return CustomValidators;
}());
exports.CustomValidators = CustomValidators;
