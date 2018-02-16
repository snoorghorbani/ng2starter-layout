"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["USER_SELECTED"] = "[USER] USER_SELECTED";
    UserActionTypes["REFRESH_USER_INFO"] = "[USER] REFRESH_USER_INFO";
})(UserActionTypes = exports.UserActionTypes || (exports.UserActionTypes = {}));
var UserSelectedAction = /** @class */ (function () {
    function UserSelectedAction(payload) {
        this.payload = payload;
        this.type = UserActionTypes.USER_SELECTED;
    }
    return UserSelectedAction;
}());
exports.UserSelectedAction = UserSelectedAction;
var RefreshUserInfoAction = /** @class */ (function () {
    function RefreshUserInfoAction(payload) {
        this.payload = payload;
        this.type = UserActionTypes.REFRESH_USER_INFO;
    }
    return RefreshUserInfoAction;
}());
exports.RefreshUserInfoAction = RefreshUserInfoAction;
//# sourceMappingURL=user.actions.js.map