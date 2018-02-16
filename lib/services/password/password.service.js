"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Rx_1 = require("rxjs/Rx");
var store_1 = require("@ngrx/store");
var FeatureReducer = require("../../feature/feature.reducers");
var models_1 = require("../../models");
var user_module_configuration_1 = require("../user-module-configuration");
var PasswordService = /** @class */ (function () {
    function PasswordService(http, store, userConfigurationService) {
        this.http = http;
        this.store = store;
        this.userConfigurationService = userConfigurationService;
        this.numberOfRequeseted$ = this.store.select(FeatureReducer.getNumberOfRequeseted);
    }
    PasswordService.prototype.isValidResetPasswordRequest = function () {
        return this.numberOfRequeseted$
            .take(1)
            .switchMap(function (count) { return (count < 3 ? Rx_1.Observable.of(true) : Rx_1.Observable.of(false)); });
    };
    PasswordService.prototype.isValidResetPasswordReset = function (data) {
        var model = new models_1.ResetPasswordModel.Request(data);
        var Token = model.Token;
        return this.http
            .get("http://wifi.shatel.ir/api/v1/reset/tokens/" + Token, { withCredentials: true })
            .map(function (response) { return response; });
    };
    PasswordService.prototype.requestResetPasswordLink = function (data) {
        var model = new models_1.ResetPasswordRequestModel.Request(data);
        // TODO:
        // return this.http.post(this.userConfigurationService.config.endpoints.resetPasswordRequest(model), model.getRequestBody(), { withCredentials: true })
        return this.http
            .post(this.userConfigurationService.config.endpoints.editProfile, model.getRequestBody(), {
            withCredentials: true
        })
            .map(function (response) { return response; });
    };
    PasswordService.prototype.changePassword = function (data) {
        var model = new models_1.ChangePasswordModel.Request(data);
        return this.http
            .patch("this.userConfigurationService.config.endpoints.changePassword(model)", model.getRequestBody(), {
            withCredentials: true
        })
            .map(function (response) { return response; });
    };
    PasswordService.prototype.resetPassword = function (data) {
        var model = new models_1.ResetPasswordModel.Request(data);
        var Token = model.Token;
        return this.http
            .patch("http://wifi.shatel.ir/api/v1/reset/tokens/" + Token, model.getRequestBody(), {
            withCredentials: true
        })
            .map(function (response) { return response; });
    };
    PasswordService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    PasswordService.ctorParameters = function () { return [
        { type: http_1.HttpClient, },
        { type: store_1.Store, },
        { type: user_module_configuration_1.UserConfigurationService, },
    ]; };
    return PasswordService;
}());
exports.PasswordService = PasswordService;
exports.PasswordServiceStub = {};
//# sourceMappingURL=password.service.js.map