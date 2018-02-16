"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var reset_password_request_actions_1 = require("./reset-password-request.actions");
exports.initialState = {
    numberOfRequested: 0,
    lastRequestedTime: null,
    disable: false
};
function reducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case reset_password_request_actions_1.ResetPasswordRequestActionTypes.GET_RESET_PASSWORD_LINK: {
            return __assign({}, state);
        }
        case reset_password_request_actions_1.ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_START: {
            return __assign({}, state, { numberOfRequested: state.numberOfRequested + 1, lastRequestedTime: Date.now().toString() });
        }
        case reset_password_request_actions_1.ResetPasswordRequestActionTypes.RESET_PASSWORD_LINK_REQUEST_SUCCEED: {
            return __assign({}, state);
        }
        case reset_password_request_actions_1.ResetPasswordRequestActionTypes.DISABLE_GET_LINK: {
            return __assign({}, state, { disable: true });
        }
        case reset_password_request_actions_1.ResetPasswordRequestActionTypes.ENABLE_GET_LINK: {
            return __assign({}, state, { disable: false });
        }
        default: {
            return state;
        }
    }
}
exports.reducer = reducer;
exports.getNumberOfRequeseted = function (state) { return state.numberOfRequested; };
exports.getStatus = function (state) { return state.disable; };
//# sourceMappingURL=reset-password-request.reducer.js.map