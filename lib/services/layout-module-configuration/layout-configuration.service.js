"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var layout_config_1 = require("../../layout.config");
var config_1 = require("@soushians/config");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var actions_1 = require("../../actions");
var LayoutConfigurationService = /** @class */ (function () {
    function LayoutConfigurationService(configFile, store) {
        var _this = this;
        this.store = store;
        this.config$ = new BehaviorSubject_1.BehaviorSubject(this._config);
        this._config = Object.assign({}, layout_config_1.MODULE_DEFAULT_CONFIG, configFile);
        this.config$.next(this._config);
        this.store.select(config_1.getlayoutModuleConfig).subscribe(function (config) {
            if (!config)
                return;
            _this.store.dispatch(new actions_1.UpdateLayoutConfigAction(config.Config));
            _this._config = Object.assign({}, _this._config, config.Config);
            _this.config$.next(_this._config);
        });
    }
    Object.defineProperty(LayoutConfigurationService.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    LayoutConfigurationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    LayoutConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [layout_config_1.MODULE_CONFIG_TOKEN,] },] },
        { type: store_1.Store, },
    ]; };
    return LayoutConfigurationService;
}());
exports.LayoutConfigurationService = LayoutConfigurationService;
//# sourceMappingURL=layout-configuration.service.js.map