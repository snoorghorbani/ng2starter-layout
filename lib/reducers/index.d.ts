import { MemoizedSelector } from "@ngrx/store";
import * as layout from "./layout.reducer";
import { State } from "./layout.reducer";
export { State };
export interface LayoutState {
    layout: layout.State;
}
export interface FeatureState {
    "layout": LayoutState;
}
export declare const LayoutReducers: {
    layout: typeof layout.Reducer;
};
export declare const selectLayoutState: MemoizedSelector<object, LayoutState>;
export declare const getLayout: MemoizedSelector<object, layout.State>;
export declare const getTitle: MemoizedSelector<object, string>;
export declare const getShowMainSidenav: MemoizedSelector<object, boolean>;
export declare const getMainSideNavMode: MemoizedSelector<object, "over" | "push" | "side">;
export declare const getLayoutMode: MemoizedSelector<object, "with-margin" | "without-margin" | "default">;
export declare const getShowSecondSidebarStatus: MemoizedSelector<object, boolean>;
export declare const getSecondSidebarMode: MemoizedSelector<object, "over" | "push" | "side">;
