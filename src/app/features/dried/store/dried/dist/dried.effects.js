"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DriedEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var dried_actions_1 = require("./dried.actions");
var operators_1 = require("rxjs/operators");
var DriedEffects = /** @class */ (function () {
    function DriedEffects(actions$, router, driedService, toastService, reportService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.driedService = driedService;
        this.toastService = toastService;
        this.reportService = reportService;
        this.saveEntryDriedEffect$ = effects_1.createEffect(function () {
            return _this.actions$.pipe(effects_1.ofType(dried_actions_1.saveEntryDried), operators_1.exhaustMap(function (action) {
                return _this.driedService.saveEntryDried(action.entryDried).pipe(operators_1.switchMap(function (driefId) {
                    _this.toastService.onSuccess();
                    _this.router.navigate([
                        'dried/print-report',
                        "" + driefId.driefId,
                    ]);
                    return [
                        dried_actions_1.saveEntryDriedSuccess()
                    ];
                }), operators_1.catchError(function (error) {
                    _this.toastService.onError();
                    return [
                        dried_actions_1.saveEntryDriedError()
                    ];
                }));
            }));
        });
        this.generateReportEntryDriedEffect$ = effects_1.createEffect(function () {
            return _this.actions$.pipe(effects_1.ofType(dried_actions_1.generateReportEntryDried), operators_1.exhaustMap(function (action) {
                return _this.reportService.generateReport(action.entryDriedId, 'drief').pipe(operators_1.switchMap(function (_) {
                    return [dried_actions_1.clearEntryDried()];
                }));
            }));
        });
    }
    DriedEffects = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DriedEffects);
    return DriedEffects;
}());
exports.DriedEffects = DriedEffects;
