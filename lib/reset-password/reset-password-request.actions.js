"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResetPasswordRequestActionTypes;
(function (ResetPasswordRequestActionTypes) {
    ResetPasswordRequestActionTypes["GET_RESET_PASSWORD_LINK"] = "[USER][PASSWORD] GET_RESET_PASSWORD_LINK";
    ResetPasswordRequestActionTypes["RESET_PASSWORD_LINK_REQUEST_START"] = "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_START";
    ResetPasswordRequestActionTypes["RESET_PASSWORD_LINK_REQUEST_SUCCEED"] = "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_SUCCEED";
    ResetPasswordRequestActionTypes["RESET_PASSWORD_LINK_REQUEST_FAILED"] = "[USER][PASSWORD] RESET_PASSWORD_LINK_REQUEST_FAILED";
    ResetPasswordRequestActionTypes["DISABLE_GET_LINK"] = "[USER][PASSWORD] DISABLE_GET_LINK";
    ResetPasswordRequestActionTypes["ENABLE_GET_LINK"] = "[USER][PASSWORD] ENABLE_GET_LINK";
    ResetPasswordRequestActionTypes["MAXIMUM_TRY_HAPPEND"] = "[USER][PASSWORD] MAXIMUM_TRY_HAPPEND";
    ResetPasswordRequestActionTypes["PASSWORD_CHANGED_SUCCEED"] = "[USER][PASSWORD] PASSWORD_CHANGED_SUCCEED";
    ResetPasswordRequestActionTypes["PASSWORD_CHANGED_FAILED"] = "[USER][PASSWORD] PASSWORD_CHANGED_FAILED";
})(ResetPasswordRequestActionTypes = exports.ResetPasswordRequestActionTypes || (exports.ResetPasswordRequestActionTypes = {}));
var GetResetPasswordLink = /** @class */ (function () {
    function GetResetPasswordLink(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK;
    }
    return GetResetPasswordLink;
}());
exports.GetResetPasswordLink = GetResetPasswordLink;
var ResetPasswordLinkRequestStart = /** @class */ (function () {
    function ResetPasswordLinkRequestStart(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START;
    }
    return ResetPasswordLinkRequestStart;
}());
exports.ResetPasswordLinkRequestStart = ResetPasswordLinkRequestStart;
var ResetPasswordLinkRequestSucceed = /** @class */ (function () {
    function ResetPasswordLinkRequestSucceed() {
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED;
    }
    return ResetPasswordLinkRequestSucceed;
}());
exports.ResetPasswordLinkRequestSucceed = ResetPasswordLinkRequestSucceed;
var ResetPasswordLinkRequestFailed = /** @class */ (function () {
    function ResetPasswordLinkRequestFailed() {
        this.type = ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_FAILED;
    }
    return ResetPasswordLinkRequestFailed;
}());
exports.ResetPasswordLinkRequestFailed = ResetPasswordLinkRequestFailed;
var DisableGetLink = /** @class */ (function () {
    function DisableGetLink() {
        this.type = ResetPasswordRequestActionTypes.DISABLE_GET_LINK;
    }
    return DisableGetLink;
}());
exports.DisableGetLink = DisableGetLink;
var EnableGetLink = /** @class */ (function () {
    function EnableGetLink() {
        this.type = ResetPasswordRequestActionTypes.ENABLE_GET_LINK;
    }
    return EnableGetLink;
}());
exports.EnableGetLink = EnableGetLink;
var MaximumTryHappend = /** @class */ (function () {
    function MaximumTryHappend() {
        this.type = ResetPasswordRequestActionTypes.MAXIMUM_TRY_HAPPEND;
    }
    return MaximumTryHappend;
}());
exports.MaximumTryHappend = MaximumTryHappend;
var PasswordChangedSucceed = /** @class */ (function () {
    function PasswordChangedSucceed() {
        this.type = ResetPasswordRequestActionTypes.PASSWORD_CHANGED_SUCCEED;
    }
    return PasswordChangedSucceed;
}());
exports.PasswordChangedSucceed = PasswordChangedSucceed;
var PasswordChangedFailed = /** @class */ (function () {
    function PasswordChangedFailed(payload) {
        this.payload = payload;
        this.type = ResetPasswordRequestActionTypes.PASSWORD_CHANGED_FAILED;
    }
    return PasswordChangedFailed;
}());
exports.PasswordChangedFailed = PasswordChangedFailed;
//# sourceMappingURL=reset-password-request.actions.js.map