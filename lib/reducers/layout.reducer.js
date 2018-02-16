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
var layout = require("../actions/layout");
var initialState = {
    showMainSidenav: false,
    showSecondSideNav: false,
    secondSideNavMode: "over",
    mainSideNavMode: "over",
    mainSideNavItems: [],
    showLeftNavBar: false,
    stickyLeftNavBar: false,
    layoutMode: "default",
    title: ""
};
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case layout.LayoutActionTypes.UPDATE_LAYOUT_CONFIG:
            return __assign({}, state, action.payload);
        case layout.CLOSE_SIDENAV:
            return __assign({}, state, { showMainSidenav: false });
        case layout.OPEN_SIDENAV:
            return __assign({}, state, { showMainSidenav: true });
        case layout.LayoutActionTypes.TITLE_CHANGED:
            return __assign({}, state, { title: action.title });
        case layout.LayoutActionTypes.CHANGE_LAYOUT:
            return __assign({}, state, { layoutMode: action.name });
        case layout.LayoutActionTypes.CHANGE_MAIN_SIDENAVE_MODE:
            return __assign({}, state, { mainSideNavMode: action.mode });
        case layout.LayoutActionTypes.CLOSE_SECOND_SIDEBAR:
            return __assign({}, state, { showSecondSideNav: false });
        case layout.LayoutActionTypes.OPEN_SECOND_SIDEBAR:
            return __assign({}, state, { showSecondSideNav: true });
        case layout.LayoutActionTypes.CHANGE_SECOND_SIDENAV_MODE:
            return __assign({}, state, { secondSideNavMode: action.mode });
        default:
            return state;
    }
}
exports.Reducer = Reducer;
exports.getShowSidenav = function (state) { return state.showMainSidenav; };
exports.getTitle = function (state) { return state.title; };
exports.getShowMainSidenav = function (state) { return state.showMainSidenav; };
exports.getMainSideNavMode = function (state) { return state.mainSideNavMode; };
exports.getLayoutMode = function (state) { return state.layoutMode; };
exports.getShowSecondSidebarStatus = function (state) { return state.showSecondSideNav; };
exports.getSecondSidebarMode = function (state) { return state.secondSideNavMode; };
//# sourceMappingURL=layout.reducer.js.map