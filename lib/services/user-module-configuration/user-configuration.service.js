"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var user_config_1 = require("../../user.config");
var config_1 = require("@soushians/config");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var UserConfigurationService = /** @class */ (function () {
    function UserConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject_1.BehaviorSubject(this._config);
        this._config = Object.assign({}, user_config_1.MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(config_1.getUserModuleConfig).subscribe(function (userConfig) {
            if (!userConfig)
                return;
            _this._config = Object.assign({}, _this._config, userConfig.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(UserConfigurationService.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    UserConfigurationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    UserConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [user_config_1.MODULE_CONFIG_TOKEN,] },] },
        { type: store_1.Store, },
    ]; };
    return UserConfigurationService;
}());
exports.UserConfigurationService = UserConfigurationService;
//# sourceMappingURL=user-configuration.service.js.map