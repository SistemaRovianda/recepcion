"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BasicFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var moment = require("moment");
var numbers_validators_1 = require("src/app/shared/validators/numbers.validators");
var BasicFormComponent = /** @class */ (function () {
    function BasicFormComponent(fb) {
        this.fb = fb;
        this.submit = new core_1.EventEmitter();
        this.date = moment(new Date()).format('YYYY-MM-DD');
        this.form = fb.group({
            value: ['', forms_1.Validators.required],
            observations: ['', numbers_validators_1.CustomValidators.textAndNumbers],
            accepted: ['', forms_1.Validators.required]
        });
    }
    BasicFormComponent.prototype.ngOnInit = function () {
        this.setValidatorByTypeValue();
    };
    BasicFormComponent.prototype.setValidatorByTypeValue = function () {
        if (this.typeValue == 'numberT') {
            this.form.get('value').clearValidators();
            this.form
                .get('value')
                .setValidators([
                forms_1.Validators.required,
                forms_1.Validators.max(4),
                forms_1.Validators.min(-18),
                numbers_validators_1.CustomValidators.integerForTemperature
            ]);
        }
        if (this.typeValue == 'numberW') {
            console.log('numberW...');
            this.form.get('value').clearValidators();
            this.form
                .get('value')
                .setValidators([
                forms_1.Validators.required,
                numbers_validators_1.CustomValidators.integerForWeight,
            ]);
        }
        if (this.typeValue == 'text') {
            this.form.get('value').clearValidators();
            this.form
                .get('value')
                .setValidators([forms_1.Validators.required, numbers_validators_1.CustomValidators.textAndNumbers]);
        }
    };
    BasicFormComponent.prototype.onSubmitForm = function () {
        this.submit.emit(this.form.value);
    };
    Object.defineProperty(BasicFormComponent.prototype, "value", {
        get: function () {
            return this.form.get('value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasicFormComponent.prototype, "observations", {
        get: function () {
            return this.form.get('observations');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasicFormComponent.prototype, "accepted", {
        get: function () {
            return this.form.get('accepted');
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], BasicFormComponent.prototype, "titleForm");
    __decorate([
        core_1.Input()
    ], BasicFormComponent.prototype, "infoOne");
    __decorate([
        core_1.Input()
    ], BasicFormComponent.prototype, "infoTwo");
    __decorate([
        core_1.Input()
    ], BasicFormComponent.prototype, "placeholderMessage");
    __decorate([
        core_1.Input()
    ], BasicFormComponent.prototype, "typeValue");
    __decorate([
        core_1.Output('onSubmit')
    ], BasicFormComponent.prototype, "submit");
    BasicFormComponent = __decorate([
        core_1.Component({
            selector: 'app-basic-form',
            templateUrl: './basic-form.component.html',
            styleUrls: ['./basic-form.component.scss']
        })
    ], BasicFormComponent);
    return BasicFormComponent;
}());
exports.BasicFormComponent = BasicFormComponent;
