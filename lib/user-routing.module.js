"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_1 = require("./dashboard");
var profile_view_1 = require("./profile-view");
var profile_edit_1 = require("./profile-edit");
var change_password_1 = require("./change-password");
var search_account_1 = require("./search-account");
var feature_1 = require("./feature");
var routes = [
    {
        path: "user/panel",
        component: dashboard_1.DashboardContainerComponent,
        children: [
            {
                path: "",
                component: dashboard_1.DashboardLinksComponent
            },
            {
                path: "profile",
                component: profile_view_1.ProfileContainerComponent
            },
            {
                path: "profile/edit",
                component: profile_edit_1.ProfileEditContainerComponent
            },
            {
                path: "password/change",
                component: change_password_1.ChangePasswordContainerComponent
            }
        ]
    },
    {
        path: "admin/user",
        children: [
            { path: "managment", component: search_account_1.SearchComponent },
            {
                path: ":Email",
                component: feature_1.FeatureContainerComponent,
                children: [
                    {
                        path: "profile-edit",
                        component: profile_edit_1.ProfileEditContainerComponent
                    },
                    {
                        path: "change-password",
                        component: change_password_1.ChangePasswordContainerComponent
                    }
                ]
            }
        ]
    }
];
exports.RoutingModule = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=user-routing.module.js.map