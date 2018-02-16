"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileViewActionTypes;
(function (ProfileViewActionTypes) {
    ProfileViewActionTypes["GET_PROFILE"] = "[USER][PROFILE] GET_PROFILE";
    ProfileViewActionTypes["GET_PROFILE_START"] = "[USER][PROFILE] GET_PROFILE_START";
    ProfileViewActionTypes["GET_PROFILE_SUCCEED"] = "[USER][PROFILE] GET_PROFILE_SUCCEED";
    ProfileViewActionTypes["GET_PROFILE_FAILED"] = "[USER][PROFILE] GET_PROFILE_FAILED";
})(ProfileViewActionTypes = exports.ProfileViewActionTypes || (exports.ProfileViewActionTypes = {}));
var GetProfile = /** @class */ (function () {
    function GetProfile() {
        this.type = ProfileViewActionTypes.GET_PROFILE;
    }
    return GetProfile;
}());
exports.GetProfile = GetProfile;
var GetProfileStart = /** @class */ (function () {
    function GetProfileStart() {
        this.type = ProfileViewActionTypes.GET_PROFILE_START;
    }
    return GetProfileStart;
}());
exports.GetProfileStart = GetProfileStart;
var GetProfileSucceed = /** @class */ (function () {
    function GetProfileSucceed(payload) {
        this.payload = payload;
        this.type = ProfileViewActionTypes.GET_PROFILE_SUCCEED;
    }
    return GetProfileSucceed;
}());
exports.GetProfileSucceed = GetProfileSucceed;
var GetProfileFailed = /** @class */ (function () {
    function GetProfileFailed() {
        this.type = ProfileViewActionTypes.GET_PROFILE_FAILED;
    }
    return GetProfileFailed;
}());
exports.GetProfileFailed = GetProfileFailed;
//# sourceMappingURL=profile-view.actions.js.map