import { Action } from "@ngrx/store";

export enum ToolbarActionTypes {
	COMPORTABLE = "[Layout][TOOLBAR] COMPORTABLE",
	COMPACT = "[Layout][TOOLBAR] COMPACT",
	SUMMARY = "[Layout][TOOLBAR] SUMMARY"
}

export class ChangeToolbatToComfortableModeAction implements Action {
	readonly type = ToolbarActionTypes.COMPORTABLE;
}
export class ChangeToolbatToCompactModeAction implements Action {
	readonly type = ToolbarActionTypes.COMPACT;
}
export class ChangeToolbatToSummaryModeAction implements Action {
	readonly type = ToolbarActionTypes.SUMMARY;
}
export type ToolbarActions =
	| ChangeToolbatToComfortableModeAction
	| ChangeToolbatToCompactModeAction
	| ChangeToolbatToSummaryModeAction;
