"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var FeatureReducer = require("../../feature/feature.reducers");
var ProfileContainerComponent = /** @class */ (function () {
    function ProfileContainerComponent(store) {
        this.store = store;
        this.data$ = this.store.select(FeatureReducer.getUser);
        this.dataStatus$ = this.store.select(FeatureReducer.getUserInforamtionStatus);
    }
    ProfileContainerComponent.prototype.ngOnInit = function () { };
    ProfileContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "<user-profile\n                [information]=\"data$\"\n                [dataStatus$]='userDataStatus$'\n            ></user-profile>"
                },] },
    ];
    /** @nocollapse */
    ProfileContainerComponent.ctorParameters = function () { return [
        { type: store_1.Store, },
    ]; };
    return ProfileContainerComponent;
}());
exports.ProfileContainerComponent = ProfileContainerComponent;
//# sourceMappingURL=profile-container.component.js.map