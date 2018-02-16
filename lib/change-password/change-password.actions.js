"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChangePasswordActionTypes;
(function (ChangePasswordActionTypes) {
    ChangePasswordActionTypes["CHANGE_PASSWORD"] = "[USER][PASSWORD] CHANGE_PASSWORD";
    ChangePasswordActionTypes["PASSWORD_CHANGED_START"] = "[USER][PASSWORD] PASSWORD_CHANGED_START";
    ChangePasswordActionTypes["PASSWORD_CHANGED_SUCCEED"] = "[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED";
    ChangePasswordActionTypes["PASSWORD_CHANGED_FAILED"] = "[USER][PASSWORD] PASSWORD_CHANGED_FAILED";
})(ChangePasswordActionTypes = exports.ChangePasswordActionTypes || (exports.ChangePasswordActionTypes = {}));
var ChangePassword = /** @class */ (function () {
    function ChangePassword(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.CHANGE_PASSWORD;
    }
    return ChangePassword;
}());
exports.ChangePassword = ChangePassword;
var ChangePasswordStart = /** @class */ (function () {
    function ChangePasswordStart(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_START;
    }
    return ChangePasswordStart;
}());
exports.ChangePasswordStart = ChangePasswordStart;
var ChangePasswordSucceed = /** @class */ (function () {
    function ChangePasswordSucceed(payload) {
        this.payload = payload;
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_SUCCEED;
    }
    return ChangePasswordSucceed;
}());
exports.ChangePasswordSucceed = ChangePasswordSucceed;
var ChangePasswordFailed = /** @class */ (function () {
    function ChangePasswordFailed() {
        this.type = ChangePasswordActionTypes.PASSWORD_CHANGED_FAILED;
    }
    return ChangePasswordFailed;
}());
exports.ChangePasswordFailed = ChangePasswordFailed;
//# sourceMappingURL=change-password.actions.js.map