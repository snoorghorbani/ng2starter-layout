"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditProfileActionTypes;
(function (EditProfileActionTypes) {
    EditProfileActionTypes["EDIT_PROFILE"] = "[USER][PASSWORD] EDIT_PROFILE";
    EditProfileActionTypes["EDIT_PROFILE_START"] = "[USER][PASSWORD] EDIT_PROFILE_START";
    EditProfileActionTypes["EDIT_PROFILE_SUCCEED"] = "[USER][PASSWORD] EDIT_PROFILE_SUCCEED";
    EditProfileActionTypes["EDIT_PROFILE_FAILED"] = "[USER][PASSWORD] EDIT_PROFILE_FAILED";
})(EditProfileActionTypes = exports.EditProfileActionTypes || (exports.EditProfileActionTypes = {}));
var EditProfile = /** @class */ (function () {
    function EditProfile(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE;
    }
    return EditProfile;
}());
exports.EditProfile = EditProfile;
var EditProfileStart = /** @class */ (function () {
    function EditProfileStart(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE_START;
    }
    return EditProfileStart;
}());
exports.EditProfileStart = EditProfileStart;
var EditProfileSucceed = /** @class */ (function () {
    function EditProfileSucceed(payload) {
        this.payload = payload;
        this.type = EditProfileActionTypes.EDIT_PROFILE_SUCCEED;
    }
    return EditProfileSucceed;
}());
exports.EditProfileSucceed = EditProfileSucceed;
var EditProfileFailed = /** @class */ (function () {
    function EditProfileFailed() {
        this.type = EditProfileActionTypes.EDIT_PROFILE_FAILED;
    }
    return EditProfileFailed;
}());
exports.EditProfileFailed = EditProfileFailed;
//# sourceMappingURL=edit-profile.actions.js.map