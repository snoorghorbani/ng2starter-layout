"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var router_1 = require("@angular/router");
var models_1 = require("../../models");
var search_account_1 = require("../../search-account");
var FeatureContainerComponent = /** @class */ (function () {
    function FeatureContainerComponent(route, store) {
        var _this = this;
        this.route = route;
        this.store = store;
        this.route.params.subscribe(function (params) {
            var model = new models_1.ProfileViewModel.Request({ Email: params.Email });
            _this.store.dispatch(new search_account_1.Search(model));
        });
    }
    FeatureContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "<router-outlet></router-outlet>"
                },] },
    ];
    /** @nocollapse */
    FeatureContainerComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute, },
        { type: store_1.Store, },
    ]; };
    return FeatureContainerComponent;
}());
exports.FeatureContainerComponent = FeatureContainerComponent;
//# sourceMappingURL=feature-container.component.js.map