"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// ./effects/auth.ts
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var effects_1 = require("@ngrx/effects");
var services_1 = require("../services");
var change_password_actions_1 = require("./change-password.actions");
var ChangePasswordEffects = /** @class */ (function () {
    function ChangePasswordEffects(actions$, router, passwordService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.passwordService = passwordService;
        this.ChangePasswordRequest$ = this.actions$
            .ofType(change_password_actions_1.ChangePasswordActionTypes.CHANGE_PASSWORD)
            .map(effects_1.toPayload)
            .map(function (data) { return new change_password_actions_1.ChangePasswordStart(data); });
        this.RequestChangePasswordLink$ = this.actions$
            .ofType(change_password_actions_1.ChangePasswordActionTypes.PASSWORD_CHANGED_START)
            .map(effects_1.toPayload)
            .switchMap(function (data) {
            return _this.passwordService
                .changePassword(data)
                .map(function (res) { return new change_password_actions_1.ChangePasswordSucceed(res); })
                .catch(function () { return Observable_1.Observable.of(new change_password_actions_1.ChangePasswordFailed()); });
        });
    }
    ChangePasswordEffects.decorators = [
        { type: core_1.Injectable },
    ];
    //@Effect()
    //    ResetPassword$ = this.actions$
    //        .ofType(ResetPasswordActionTypes.RESET_PASSWORD)
    //        .map(toPayload)
    //        .map((data) => new ResetPasswordStart(data));
    //
    //    @Effect()
    //    ResetPasswordLink$ = this.actions$
    //        .ofType(ResetPasswordActionTypes.RESET_PASSWORD_START)
    //        .map(toPayload)
    //        .switchMap((data: ResetPasswordModel.Request) => {
    //            return this.passwordService.resetPassword(data)
    //                .map(() => new ResetPasswordSucceed())
    //                .catch(() => Observable.of(new ResetPasswordFailed()))
    //        });
    /** @nocollapse */
    ChangePasswordEffects.ctorParameters = function () { return [
        { type: effects_1.Actions, },
        { type: router_1.Router, },
        { type: services_1.PasswordService, },
    ]; };
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ChangePasswordEffects.prototype, "ChangePasswordRequest$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ChangePasswordEffects.prototype, "RequestChangePasswordLink$", void 0);
    return ChangePasswordEffects;
}());
exports.ChangePasswordEffects = ChangePasswordEffects;
//# sourceMappingURL=change-password.effects.js.map