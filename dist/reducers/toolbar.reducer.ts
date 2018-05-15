import { ToolbarActionTypes, ToolbarActions } from "../actions";

export interface State {
	mode: "comfortable" | "compact" | "summary";
}

const initialState: State = {
	mode: "compact"
};

export function Reducer(state = initialState, action: ToolbarActions): State {
	switch (action.type) {
		case ToolbarActionTypes.COMPACT:
			return {
				...state,
				mode: "compact"
			};
		case ToolbarActionTypes.COMPORTABLE:
			return {
				...state,
				mode: "comfortable"
			};
		case ToolbarActionTypes.SUMMARY:
			return {
				...state,
				mode: "summary"
			};
		default:
			return state;
	}
}

export const getToolbarMode = (state: State) => state.mode;
