"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var flex_layout_1 = require("@angular/flex-layout");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var authentication_1 = require("@soushians/authentication");
var user_config_1 = require("./user.config");
var infra_1 = require("@soushians/infra");
var services_1 = require("./services");
var feature_1 = require("./feature");
var feature_2 = require("./feature");
var profile_view_1 = require("./profile-view");
var change_password_1 = require("./change-password");
var profile_edit_1 = require("./profile-edit");
var reset_password_1 = require("./reset-password");
var search_account_1 = require("./search-account");
var dashboard_1 = require("./dashboard");
var feature_3 = require("./feature");
var NgsUserModule = /** @class */ (function () {
    function NgsUserModule() {
    }
    NgsUserModule.forRoot = function (config) {
        return {
            ngModule: RootNgsUserModule,
            providers: [
                { provide: user_config_1.MODULE_CONFIG_TOKEN, useValue: config },
                services_1.UserConfigurationService,
                services_1.PasswordService,
                services_1.UserService
            ]
        };
    };
    NgsUserModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        http_1.HttpClientModule,
                        infra_1.InfraModule,
                        forms_1.FormsModule,
                        router_1.RouterModule,
                        common_1.CommonModule,
                        material_1.MatExpansionModule,
                        material_1.MatSnackBarModule,
                        material_1.MatIconModule,
                        material_1.MatButtonModule,
                        material_1.MatCardModule,
                        material_1.MatSelectModule,
                        material_1.MatInputModule,
                        material_1.MatFormFieldModule,
                        material_1.MatTabsModule,
                        flex_layout_1.FlexLayoutModule,
                        material_1.MatRadioModule,
                        forms_1.ReactiveFormsModule,
                        authentication_1.AuthenticationModule,
                        animations_1.BrowserAnimationsModule
                    ],
                    declarations: [
                        search_account_1.SearchComponent,
                        profile_view_1.ProfileComponent,
                        change_password_1.ChangePasswordComponent,
                        profile_edit_1.ProfileEditComponent,
                        profile_view_1.ProfileContainerComponent,
                        dashboard_1.DashboardLinksComponent,
                        reset_password_1.ResetPasswordRequestComponent,
                        feature_3.FeatureContainerComponent,
                        dashboard_1.DashboardContainerComponent,
                        change_password_1.ChangePasswordContainerComponent,
                        profile_edit_1.ProfileEditContainerComponent
                    ],
                    exports: []
                },] },
    ];
    /** @nocollapse */
    NgsUserModule.ctorParameters = function () { return []; };
    return NgsUserModule;
}());
exports.NgsUserModule = NgsUserModule;
var RootNgsUserModule = /** @class */ (function () {
    function RootNgsUserModule() {
    }
    RootNgsUserModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        NgsUserModule,
                        store_1.StoreModule.forFeature("user", feature_1.UserReducers),
                        effects_1.EffectsModule.forFeature([
                            reset_password_1.ResetPasswordRequestEffects,
                            profile_edit_1.EditProfileEffects,
                            change_password_1.ChangePasswordEffects,
                            profile_view_1.ProfileViewEffects,
                            search_account_1.SearchEffects,
                            feature_2.UserEffects
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    RootNgsUserModule.ctorParameters = function () { return []; };
    return RootNgsUserModule;
}());
exports.RootNgsUserModule = RootNgsUserModule;
//# sourceMappingURL=user.module.js.map