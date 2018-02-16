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
var models_1 = require("../models");
var user_actions_1 = require("./user.actions");
exports.initialState = {
    loaded: false,
    data: new models_1.UserModel()
};
function userReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case user_actions_1.UserActionTypes.USER_SELECTED: {
            return __assign({}, state, { loaded: true, data: action.payload });
        }
        case user_actions_1.UserActionTypes.REFRESH_USER_INFO: {
            return __assign({}, state, { loaded: true, data: action.payload });
        }
        default: {
            return state;
        }
    }
}
exports.userReducer = userReducer;
exports.getUser = function (state) { return state.data; };
//# sourceMappingURL=user.reducer.js.map