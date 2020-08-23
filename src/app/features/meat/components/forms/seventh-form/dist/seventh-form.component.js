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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SeventhFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var users_registered_selectors_1 = require("src/app/shared/store/usersRegistered/users-registered.selectors");
var SeventhFormComponent = /** @class */ (function () {
    function SeventhFormComponent(fb, camera, _store) {
        this.fb = fb;
        this.camera = camera;
        this._store = _store;
        this.submit = new core_1.EventEmitter();
        this.form = fb.group({
            photo: ['', forms_1.Validators.required],
            qualityInspector: ['', forms_1.Validators.required],
            job: ['', forms_1.Validators.required]
        });
    }
    SeventhFormComponent.prototype.ngOnInit = function () {
        this.users$ = this._store.select(users_registered_selectors_1.SELECT_USERS_REGISTERED);
    };
    SeventhFormComponent.prototype.onUserSelected = function (evt) {
        this.userJob = evt.detail.value.job;
    };
    SeventhFormComponent.prototype.onSubmit = function () {
        var finalForm = __assign(__assign({}, this.form.value), { qualityInspector: this.form.get('qualityInspector').value.userId });
        this.submit.emit(finalForm);
    };
    SeventhFormComponent.prototype.getCamera = function () {
        var _this = this;
        this.camera
            .getPicture({
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        })
            .then(function (res) {
            _this.imgURL = 'data:image/jpeg;base64,' + res;
            _this.form.get('photo').setValue(res);
        })["catch"](function (err) { return console.error('Error en la toma de fotografia'); });
    };
    Object.defineProperty(SeventhFormComponent.prototype, "photo", {
        get: function () {
            return this.form.get('photo');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SeventhFormComponent.prototype, "qualityInspector", {
        get: function () {
            return this.form.get('qualityInspector');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SeventhFormComponent.prototype, "job", {
        get: function () {
            return this.form.get('job');
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_1.Output('onSubmit')
    ], SeventhFormComponent.prototype, "submit");
    SeventhFormComponent = __decorate([
        core_1.Component({
            selector: 'seventh-form',
            templateUrl: './seventh-form.component.html',
            styleUrls: ['./seventh-form.component.scss']
        })
    ], SeventhFormComponent);
    return SeventhFormComponent;
}());
exports.SeventhFormComponent = SeventhFormComponent;
