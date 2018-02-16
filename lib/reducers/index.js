"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var layout = require("./layout.reducer");
exports.LayoutReducers = {
    layout: layout.Reducer
};
//#region selectors
exports.selectLayoutState = store_1.createFeatureSelector("layout");
//#endregion
exports.getLayout = store_1.createSelector(exports.selectLayoutState, function (state) { return state.layout; });
exports.getTitle = store_1.createSelector(exports.getLayout, layout.getTitle);
exports.getShowMainSidenav = store_1.createSelector(exports.getLayout, layout.getShowMainSidenav);
exports.getMainSideNavMode = store_1.createSelector(exports.getLayout, layout.getMainSideNavMode);
exports.getLayoutMode = store_1.createSelector(exports.getLayout, layout.getLayoutMode);
exports.getShowSecondSidebarStatus = store_1.createSelector(exports.getLayout, layout.getShowSecondSidebarStatus);
exports.getSecondSidebarMode = store_1.createSelector(exports.getLayout, layout.getSecondSidebarMode);
//# sourceMappingURL=index.js.map