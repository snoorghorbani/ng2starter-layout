"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var change_password_actions_1 = require("./change-password.actions");
exports.initialState = {
    status: "pristine"
};
function reducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case change_password_actions_1.ChangePasswordActionTypes.CHANGE_PASSWORD: {
            return {
                status: "dirty"
            };
        }
        case change_password_actions_1.ChangePasswordActionTypes.PASSWORD_CHANGED_START: {
            return {
                status: "pending"
            };
        }
        case change_password_actions_1.ChangePasswordActionTypes.PASSWORD_CHANGED_SUCCEED: {
            return {
                status: "succeed"
            };
        }
        case change_password_actions_1.ChangePasswordActionTypes.PASSWORD_CHANGED_FAILED: {
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
//# sourceMappingURL=change-password.reducer.js.map