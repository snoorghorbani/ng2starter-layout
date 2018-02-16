"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var store_1 = require("@ngrx/store");
var config_1 = require("@soushians/config");
var models_1 = require("../../models");
var FeatureReducer = require("../../feature/feature.reducers");
var edit_profile_actions_1 = require("../edit-profile.actions");
var ProfileEditContainerComponent = /** @class */ (function () {
    // constructor(private diagramService: DiagramService, private store: Store<FeatureReducer.FeatureState>) {
    function ProfileEditContainerComponent(store) {
        this.store = store;
        this.formGroup = models_1.EditProfile_ApiModel.Request.formGroup;
        this.userInforamation$ = this.store.select(FeatureReducer.getUser);
        this.appConfig = this.store.select(config_1.getAppConfig);
        // TODO:
        // this.groups = this.diagramService.getGroups();
        this.groups = Observable_1.Observable.of(["test1", "test2"]);
    }
    ProfileEditContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userInforamation$.subscribe(function (userInfo) {
            debugger;
            if (userInfo == null)
                return;
            _this.formGroup.patchValue({
                Email: userInfo.Email,
                Roles: userInfo.Roles,
                Groups: userInfo.Groups
            });
        });
    };
    ProfileEditContainerComponent.prototype.updateProfile = function (data) {
        this.store.dispatch(new edit_profile_actions_1.EditProfile(data));
    };
    ProfileEditContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "profile-edit-contianer",
                    template: "<profile-edit\n                (submited)='updateProfile($event)'\n                [formGroup]=\"formGroup\"\n                [roles]=\"(appConfig | async)?.Config.Roles\"\n                [groups]=\"groups | async\"\n              ></profile-edit>"
                },] },
    ];
    /** @nocollapse */
    ProfileEditContainerComponent.ctorParameters = function () { return [
        { type: store_1.Store, },
    ]; };
    return ProfileEditContainerComponent;
}());
exports.ProfileEditContainerComponent = ProfileEditContainerComponent;
//# sourceMappingURL=profile-edit-container.component.js.map