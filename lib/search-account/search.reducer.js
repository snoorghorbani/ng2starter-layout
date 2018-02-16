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
var search_actions_1 = require("./search.actions");
exports.initialState = {
    status: "pristine",
    data: new models_1.ProfileViewModel.Response()
};
function reducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case search_actions_1.SearchActionTypes.SEARCH: {
            return __assign({}, state, { status: "dirty", data: new models_1.ProfileViewModel.Response() });
        }
        case search_actions_1.SearchActionTypes.SEARCH_START: {
            return __assign({}, state, { status: "pending" });
        }
        case search_actions_1.SearchActionTypes.SEARCH_SUCCEED: {
            return __assign({}, state, { status: "succeed", data: action.payload });
        }
        case search_actions_1.SearchActionTypes.SEARCH_FAILED: {
            return __assign({}, state, { status: "failed" });
        }
        case search_actions_1.SearchActionTypes.CLEAR_SEARCHED_USER: {
            return exports.initialState;
        }
        default: {
            return state;
        }
    }
}
exports.reducer = reducer;
exports.getStatus = function (state) { return state.status; };
exports.getUserInfo = function (state) { return state.data; };
//# sourceMappingURL=search.reducer.js.map