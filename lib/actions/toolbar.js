"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToolbarActionTypes;
(function (ToolbarActionTypes) {
    ToolbarActionTypes["COMPORTABLE"] = "[Layout][TOOLBAR] COMPORTABLE";
    ToolbarActionTypes["COMPACT"] = "[Layout][TOOLBAR] COMPACT";
    ToolbarActionTypes["SUMMARY"] = "[Layout][TOOLBAR] SUMMARY";
    ToolbarActionTypes["ENABLE_COMFORTABLE_MODE"] = "[Layout][TOOLBAR] ENABLE_COMFORTABLE_MODE";
    ToolbarActionTypes["DISBALE_COMFORTABLE_MODE"] = "[Layout][TOOLBAR] DISBALE_COMFORTABLE_MODE";
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
var EnableComfortableModeAction = /** @class */ (function () {
    function EnableComfortableModeAction() {
        this.type = ToolbarActionTypes.ENABLE_COMFORTABLE_MODE;
    }
    return EnableComfortableModeAction;
}());
exports.EnableComfortableModeAction = EnableComfortableModeAction;
var DisableComfortableModeAction = /** @class */ (function () {
    function DisableComfortableModeAction() {
        this.type = ToolbarActionTypes.DISBALE_COMFORTABLE_MODE;
    }
    return DisableComfortableModeAction;
}());
exports.DisableComfortableModeAction = DisableComfortableModeAction;
//# sourceMappingURL=toolbar.js.map