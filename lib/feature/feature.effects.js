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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
var effects_1 = require("@ngrx/effects");
var authentication_1 = require("@soushians/authentication");
var services_1 = require("../services");
var profile_view_1 = require("../profile-view");
var UserEffects = /** @class */ (function () {
    function UserEffects(actions$, router, service) {
        this.actions$ = actions$;
        this.router = router;
        this.service = service;
        this.getProfileInformation$ = this.actions$.ofType(authentication_1.SignInActionTypes.SIGNIN_SUCCEED).map(function () {
            debugger;
            return new profile_view_1.GetProfile();
        });
    }
    UserEffects.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    UserEffects.ctorParameters = function () { return [
        { type: effects_1.Actions, },
        { type: router_1.Router, },
        { type: services_1.UserService, },
    ]; };
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Object)
    ], UserEffects.prototype, "getProfileInformation$", void 0);
    return UserEffects;
}());
exports.UserEffects = UserEffects;
//# sourceMappingURL=feature.effects.js.map