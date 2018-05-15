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
var actions_1 = require("../actions");
var initialState = {
    mode: "compact"
};
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.ToolbarActionTypes.COMPACT:
            return __assign({}, state, { mode: "compact" });
        case actions_1.ToolbarActionTypes.COMPORTABLE:
            return __assign({}, state, { mode: "comfortable" });
        case actions_1.ToolbarActionTypes.SUMMARY:
            return __assign({}, state, { mode: "summary" });
        default:
            return state;
    }
}
exports.Reducer = Reducer;
exports.getToolbarMode = function (state) { return state.mode; };
//# sourceMappingURL=toolbar.reducer.js.map