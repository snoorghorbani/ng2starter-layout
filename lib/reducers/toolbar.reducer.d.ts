import { ToolbarActions } from "../actions";
export interface State {
    mode: "comfortable" | "compact" | "summary";
}
export declare function Reducer(state: State, action: ToolbarActions): State;
export declare const getToolbarMode: (state: State) => "comfortable" | "compact" | "summary";
