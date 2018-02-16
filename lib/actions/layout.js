"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPEN_SIDENAV = "[Layout] Open Sidenav";
exports.CLOSE_SIDENAV = "[Layout] Close Sidenav";
var LayoutActionTypes;
(function (LayoutActionTypes) {
    LayoutActionTypes["UPDATE_LAYOUT_CONFIG"] = "[Layout] UPDATE_LAYOUT_CONFIG";
    LayoutActionTypes["SIGNOUT"] = "[Layout] signout";
    LayoutActionTypes["TITLE_CHANGED"] = "[LAYOUT] TITLE_CHANGED";
    LayoutActionTypes["CHANGE_LAYOUT"] = "[Layout] Change Layout";
    LayoutActionTypes["CHANGE_MAIN_SIDENAVE_MODE"] = "[Layout] Change main sidenav mode";
    LayoutActionTypes["OPEN_SECOND_SIDEBAR"] = "[Layout] Open Second Sidebar";
    LayoutActionTypes["CLOSE_SECOND_SIDEBAR"] = "[Layout] Close Second Sidebar";
    LayoutActionTypes["CHANGE_SECOND_SIDENAV_MODE"] = "[Layout] Change second sidenav mode";
})(LayoutActionTypes = exports.LayoutActionTypes || (exports.LayoutActionTypes = {}));
var UpdateLayoutConfigAction = /** @class */ (function () {
    function UpdateLayoutConfigAction(payload) {
        this.payload = payload;
        this.type = LayoutActionTypes.UPDATE_LAYOUT_CONFIG;
    }
    return UpdateLayoutConfigAction;
}());
exports.UpdateLayoutConfigAction = UpdateLayoutConfigAction;
var OpenSidenavAction = /** @class */ (function () {
    function OpenSidenavAction() {
        this.type = exports.OPEN_SIDENAV;
    }
    return OpenSidenavAction;
}());
exports.OpenSidenavAction = OpenSidenavAction;
var CloseSidenavAction = /** @class */ (function () {
    function CloseSidenavAction() {
        this.type = exports.CLOSE_SIDENAV;
    }
    return CloseSidenavAction;
}());
exports.CloseSidenavAction = CloseSidenavAction;
var ChangeLayout = /** @class */ (function () {
    function ChangeLayout(name) {
        this.name = name;
        this.type = LayoutActionTypes.CHANGE_LAYOUT;
    }
    return ChangeLayout;
}());
exports.ChangeLayout = ChangeLayout;
var ChangeSideNavMode = /** @class */ (function () {
    function ChangeSideNavMode(mode) {
        this.mode = mode;
        this.type = LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE;
    }
    return ChangeSideNavMode;
}());
exports.ChangeSideNavMode = ChangeSideNavMode;
var ChangeSecondSidenavMode = /** @class */ (function () {
    function ChangeSecondSidenavMode(mode) {
        this.mode = mode;
        this.type = LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE;
    }
    return ChangeSecondSidenavMode;
}());
exports.ChangeSecondSidenavMode = ChangeSecondSidenavMode;
var SignoutAction = /** @class */ (function () {
    function SignoutAction() {
        this.type = LayoutActionTypes.SIGNOUT;
    }
    return SignoutAction;
}());
exports.SignoutAction = SignoutAction;
var TitleChangedAction = /** @class */ (function () {
    function TitleChangedAction(title) {
        this.title = title;
        this.type = LayoutActionTypes.TITLE_CHANGED;
    }
    return TitleChangedAction;
}());
exports.TitleChangedAction = TitleChangedAction;
var OpenSecondSidenavAction = /** @class */ (function () {
    function OpenSecondSidenavAction() {
        this.type = LayoutActionTypes.OPEN_SECOND_SIDEBAR;
    }
    return OpenSecondSidenavAction;
}());
exports.OpenSecondSidenavAction = OpenSecondSidenavAction;
var CloseSecondSidenavAction = /** @class */ (function () {
    function CloseSecondSidenavAction() {
        this.type = LayoutActionTypes.CLOSE_SECOND_SIDEBAR;
    }
    return CloseSecondSidenavAction;
}());
exports.CloseSecondSidenavAction = CloseSecondSidenavAction;
//# sourceMappingURL=layout.js.map