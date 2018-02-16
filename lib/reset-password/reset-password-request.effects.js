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
var reset_password_request_actions_1 = require("./reset-password-request.actions");
var services_1 = require("../services");
var ResetPasswordRequestEffects = /** @class */ (function () {
    function ResetPasswordRequestEffects(actions$, router, passwordService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.passwordService = passwordService;
        this.ResetPasswordRequest$ = this.actions$
            .ofType(reset_password_request_actions_1.ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK)
            .map(effects_1.toPayload)
            .switchMap(function (data) {
            return _this.passwordService.isValidResetPasswordRequest().map(function (isValid) {
                return isValid ? new reset_password_request_actions_1.ResetPasswordLinkRequestStart(data) : new reset_password_request_actions_1.MaximumTryHappend();
            });
        });
        this.MaximumTryHappend$ = this.actions$
            .ofType(reset_password_request_actions_1.ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND, reset_password_request_actions_1.ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START)
            .map(function () { return new reset_password_request_actions_1.DisableGetLink(); });
        this.enableAfterTime$ = this.actions$
            .ofType(reset_password_request_actions_1.ResetPasswordRequestActionTypes.DISABLE_GET_LINK)
            .takeUntil(this.actions$.ofType(reset_password_request_actions_1.ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND))
            .delay(3 * 1000)
            .map(function () { return new reset_password_request_actions_1.EnableGetLink(); });
        this.RequestResetPasswordLink$ = this.actions$
            .ofType(reset_password_request_actions_1.ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START)
            .map(effects_1.toPayload)
            .switchMap(function (data) {
            return _this.passwordService
                .requestResetPasswordLink(data)
                .map(function () { return new reset_password_request_actions_1.ResetPasswordLinkRequestSucceed(); })
                .catch(function () { return Observable_1.Observable.of(new reset_password_request_actions_1.ResetPasswordLinkRequestFailed()); });
        });
    }
    ResetPasswordRequestEffects.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ResetPasswordRequestEffects.ctorParameters = function () { return [
        { type: effects_1.Actions, },
        { type: router_1.Router, },
        { type: services_1.PasswordService, },
    ]; };
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ResetPasswordRequestEffects.prototype, "ResetPasswordRequest$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ResetPasswordRequestEffects.prototype, "MaximumTryHappend$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ResetPasswordRequestEffects.prototype, "enableAfterTime$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ResetPasswordRequestEffects.prototype, "RequestResetPasswordLink$", void 0);
    return ResetPasswordRequestEffects;
}());
exports.ResetPasswordRequestEffects = ResetPasswordRequestEffects;
//# sourceMappingURL=reset-password-request.effects.js.map