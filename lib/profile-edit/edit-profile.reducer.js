"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var edit_profile_actions_1 = require("./edit-profile.actions");
exports.initialState = {
    status: "pristine"
};
function reducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case edit_profile_actions_1.EditProfileActionTypes.EDIT_PROFILE: {
            return {
                status: "dirty"
            };
        }
        case edit_profile_actions_1.EditProfileActionTypes.EDIT_PROFILE_START: {
            return {
                status: "pending"
            };
        }
        case edit_profile_actions_1.EditProfileActionTypes.EDIT_PROFILE_SUCCEED: {
            return {
                status: "succeed"
            };
        }
        case edit_profile_actions_1.EditProfileActionTypes.EDIT_PROFILE_FAILED: {
            return {
                status: "failed"
            };
        }
        default: {
            return exports.initialState;
        }
    }
}
exports.reducer = reducer;
exports.getStatus = function (state) { return state.status; };
//# sourceMappingURL=edit-profile.reducer.js.map