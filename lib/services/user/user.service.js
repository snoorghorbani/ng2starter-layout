"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Rx_1 = require("rxjs/Rx");
var models_1 = require("../../models");
var user_module_configuration_1 = require("../../services/user-module-configuration");
var store_1 = require("@ngrx/store");
var profile_view_actions_1 = require("../../profile-view/profile-view.actions");
var infra_1 = require("@soushians/infra");
var UserService = /** @class */ (function () {
    function UserService(http, store, configurationService) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.configurationService = configurationService;
        setTimeout(function () {
            _this.store.dispatch(new profile_view_actions_1.GetProfile());
        }, 999);
    }
    UserService.prototype.getProfileInformation = function () {
        var _this = this;
        return this.configurationService.config$
            .filter(function (config) { return config.endpoints.profileInformation != ""; })
            .take(1)
            .switchMap(function (config) { return _this.http.get(config.endpoints.profileInformation); })
            .map(function (response) { return response; });
    };
    UserService.prototype.editProfile = function (data) {
        var model = new models_1.EditProfile_ApiModel.Request(data);
        return this.http
            .put(infra_1.stringTemplate(this.configurationService.config.endpoints.editProfile, model), model.getRequestBody())
            .map(function (response) {
            return new models_1.EditProfile_ApiModel.Response(response).extractData();
        });
    };
    UserService.prototype.getInfo = function (data) {
        var _this = this;
        var model = new models_1.ProfileViewModel.Request(data);
        if (this.responseCache && this.responseCache.Email == model.Email)
            return Rx_1.Observable.of(this.responseCache);
        return this.http
            .get(infra_1.stringTemplate(this.configurationService.config.endpoints.getUserInfo, model))
            .do(function (response) { return (_this.responseCache = response); })
            .map(function (response) { return response; });
    };
    UserService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: http_1.HttpClient, },
        { type: store_1.Store, },
        { type: user_module_configuration_1.UserConfigurationService, },
    ]; };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map