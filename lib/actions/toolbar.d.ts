import { Action } from "@ngrx/store";
export declare enum ToolbarActionTypes {
    COMPORTABLE = "[Layout][TOOLBAR] COMPORTABLE",
    COMPACT = "[Layout][TOOLBAR] COMPACT",
    SUMMARY = "[Layout][TOOLBAR] SUMMARY",
}
export declare class ChangeToolbatToComfortableModeAction implements Action {
    readonly type: ToolbarActionTypes;
}
export declare class ChangeToolbatToCompactModeAction implements Action {
    readonly type: ToolbarActionTypes;
}
export declare class ChangeToolbatToSummaryModeAction implements Action {
    readonly type: ToolbarActionTypes;
}
export declare type ToolbarActions = ChangeToolbatToComfortableModeAction | ChangeToolbatToCompactModeAction | ChangeToolbatToSummaryModeAction;
