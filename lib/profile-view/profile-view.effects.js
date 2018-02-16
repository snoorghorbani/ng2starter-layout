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
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var effects_1 = require("@ngrx/effects");
var services_1 = require("../services");
var profile_view_actions_1 = require("./profile-view.actions");
var dashboard_1 = require("../dashboard");
var ProfileViewEffects = /** @class */ (function () {
    function ProfileViewEffects(actions$, router, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.userService = userService;
        this.ProfileRequest$ = this.actions$
            .ofType(profile_view_actions_1.ProfileViewActionTypes.GET_PROFILE)
            .map(effects_1.toPayload)
            .map(function (data) { return new profile_view_actions_1.GetProfileStart(); });
        this.getProfile$ = this.actions$
            .ofType(profile_view_actions_1.ProfileViewActionTypes.GET_PROFILE_START)
            .map(effects_1.toPayload)
            .switchMap(function (data) {
            debugger;
            return _this.userService
                .getProfileInformation()
                .map(function (res) { return new profile_view_actions_1.GetProfileSucceed(res); })
                .catch(function () { return Observable_1.Observable.of(new profile_view_actions_1.GetProfileFailed()); });
        });
        this.refreshUserInfo$ = this.actions$
            .ofType(profile_view_actions_1.ProfileViewActionTypes.GET_PROFILE_SUCCEED)
            .map(effects_1.toPayload)
            .map(function (data) { return new dashboard_1.RefreshUserInfoAction(data); });
    }
    ProfileViewEffects.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ProfileViewEffects.ctorParameters = function () { return [
        { type: effects_1.Actions, },
        { type: router_1.Router, },
        { type: services_1.UserService, },
    ]; };
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProfileViewEffects.prototype, "ProfileRequest$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProfileViewEffects.prototype, "getProfile$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], ProfileViewEffects.prototype, "refreshUserInfo$", void 0);
    return ProfileViewEffects;
}());
exports.ProfileViewEffects = ProfileViewEffects;
//# sourceMappingURL=profile-view.effects.js.map