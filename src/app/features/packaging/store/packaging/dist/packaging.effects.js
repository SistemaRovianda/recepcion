"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PackagingEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var packaging_actions_1 = require("./packaging.actions");
var operators_1 = require("rxjs/operators");
var PackagingEffects = /** @class */ (function () {
    function PackagingEffects(actions$, packagingService, reportService, toastService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.packagingService = packagingService;
        this.reportService = reportService;
        this.toastService = toastService;
        this.router = router;
        this.savePackagingEffect$ = effects_1.createEffect(function () {
            return _this.actions$.pipe(effects_1.ofType(packaging_actions_1.saveEntryPackaging), operators_1.exhaustMap(function (action) {
                return _this.packagingService.saveEntryPackaging(action.entryPackaging).pipe(operators_1.switchMap(function (entryPackagingId) {
                    _this.toastService.onSuccess();
                    localStorage.removeItem('objQuantity');
                    _this.router.navigate([
                        'packaging/print-report',
                        "" + entryPackagingId.packingId,
                    ]);
                    return [
                        packaging_actions_1.saveEntryPackagingSuccess()
                    ];
                }), operators_1.catchError(function (error) {
                    _this.toastService.onError();
                    return [packaging_actions_1.saveEntryPackagingError()];
                }));
            }));
        });
        this.generateReportEntryPackingEffect$ = effects_1.createEffect(function () {
            return _this.actions$.pipe(effects_1.ofType(packaging_actions_1.generateReportEntryPackaging), operators_1.exhaustMap(function (action) {
                return _this.reportService
                    .generateReport(action.entryPackagingId, 'packing')
                    .pipe(operators_1.switchMap(function (_) {
                    return [packaging_actions_1.clearEntryPackaging()];
                }));
            }));
        });
    }
    PackagingEffects = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PackagingEffects);
    return PackagingEffects;
}());
exports.PackagingEffects = PackagingEffects;
