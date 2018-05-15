"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToolbarActionTypes;
(function (ToolbarActionTypes) {
    ToolbarActionTypes["COMPORTABLE"] = "[Layout][TOOLBAR] COMPORTABLE";
    ToolbarActionTypes["COMPACT"] = "[Layout][TOOLBAR] COMPACT";
    ToolbarActionTypes["SUMMARY"] = "[Layout][TOOLBAR] SUMMARY";
})(ToolbarActionTypes = exports.ToolbarActionTypes || (exports.ToolbarActionTypes = {}));
var ChangeToolbatToComfortableModeAction = /** @class */ (function () {
    function ChangeToolbatToComfortableModeAction() {
        this.type = ToolbarActionTypes.COMPORTABLE;
    }
    return ChangeToolbatToComfortableModeAction;
}());
exports.ChangeToolbatToComfortableModeAction = ChangeToolbatToComfortableModeAction;
var ChangeToolbatToCompactModeAction = /** @class */ (function () {
    function ChangeToolbatToCompactModeAction() {
        this.type = ToolbarActionTypes.COMPACT;
    }
    return ChangeToolbatToCompactModeAction;
}());
exports.ChangeToolbatToCompactModeAction = ChangeToolbatToCompactModeAction;
var ChangeToolbatToSummaryModeAction = /** @class */ (function () {
    function ChangeToolbatToSummaryModeAction() {
        this.type = ToolbarActionTypes.SUMMARY;
    }
    return ChangeToolbatToSummaryModeAction;
}());
exports.ChangeToolbatToSummaryModeAction = ChangeToolbatToSummaryModeAction;
//# sourceMappingURL=toolbar.js.map