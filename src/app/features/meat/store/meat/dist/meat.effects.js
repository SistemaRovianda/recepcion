"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MeatEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var meat_actions_1 = require("./meat.actions");
var operators_1 = require("rxjs/operators");
var MeatEffects = /** @class */ (function () {
    function MeatEffects(actions$, router, meatService, toastService, reportService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.meatService = meatService;
        this.toastService = toastService;
        this.reportService = reportService;
        this.saveEntryMeatEffect$ = effects_1.createEffect(function () {
            return _this.actions$.pipe(effects_1.ofType(meat_actions_1.saveEntryMeat), operators_1.exhaustMap(function (action) {
                return _this.meatService.saveEntryMeat(action.entryMeat).pipe(operators_1.switchMap(function (action) {
                    _this.toastService.onSuccess();
                    _this.router.navigate(['meat/print-report', "" + action.meatId]);
                    return [meat_actions_1.saveEntryMeatSuccess()];
                }), operators_1.catchError(function (error) {
                    _this.toastService.onError();
                    return [meat_actions_1.saveEntryMeatError()];
                }));
            }));
        });
        this.generateReportEntryMeatEffect$ = effects_1.createEffect(function () {
            return _this.actions$.pipe(effects_1.ofType(meat_actions_1.generateReportEntryMeat), operators_1.exhaustMap(function (action) {
                return _this.reportService.generateReport(action.entryMeatId, 'meat').pipe(operators_1.switchMap(function (_) {
                    return [meat_actions_1.clearEntryMeat()];
                }));
            }));
        });
    }
    MeatEffects = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MeatEffects);
    return MeatEffects;
}());
exports.MeatEffects = MeatEffects;
