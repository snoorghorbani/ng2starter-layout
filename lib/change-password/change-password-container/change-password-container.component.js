"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("@ngrx/store");
var models_1 = require("../../models");
var FeatureReducer = require("../../feature/feature.reducers");
var change_password_actions_1 = require("../change-password.actions");
var ChangePasswordContainerComponent = /** @class */ (function () {
    function ChangePasswordContainerComponent(route, store) {
        this.route = route;
        this.store = store;
        this.formGroup = models_1.ChangePasswordModel.Request.formGroup;
        this.ChangePasswordModel = new models_1.ChangePasswordModel.Request();
    }
    ChangePasswordContainerComponent.prototype.ngOnInit = function () {
        this.store.select(FeatureReducer.getUserInfo).subscribe(function (userInfo) {
            if (!userInfo)
                return;
            // TODO:
            // this.ChangePasswordModel.Username = userInfo.Username;
        });
    };
    ChangePasswordContainerComponent.prototype.changePassword = function (event) {
        this.ChangePasswordModel.Password = this.formGroup.get("Password").value;
        this.store.dispatch(new change_password_actions_1.ChangePassword(this.ChangePasswordModel));
    };
    ChangePasswordContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    template: "<user-change-password\n                (submited)='changePassword($event)'\n                [formGroup]=\"formGroup\"\n              ></user-change-password>"
                },] },
    ];
    /** @nocollapse */
    ChangePasswordContainerComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute, },
        { type: store_1.Store, },
    ]; };
    return ChangePasswordContainerComponent;
}());
exports.ChangePasswordContainerComponent = ChangePasswordContainerComponent;
//# sourceMappingURL=change-password-container.component.js.map