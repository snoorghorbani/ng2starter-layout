import { Component, Input, HostListener, Inject } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { Location } from "@angular/common";
import { Observable } from "rxjs/Observable";

import * as fromLayout from "../../reducers";
import {
	SignoutAction,
	OpenSecondSidenavAction,
	CloseSecondSidenavAction,
	CloseSidenavAction,
	OpenSidenavAction,
	ChangeToolbatToComfortableModeAction,
	ChangeToolbatToCompactModeAction,
	ChangeToolbatToSummaryModeAction
} from "../../actions";
import { FeatureState, getShowSecondSidebarStatus, getLayoutToolbar } from "../../reducers";
import { trigger, state, transition, style, animate } from "@angular/animations";
import { from } from "rxjs/observable/from";
import { DOCUMENT } from "@angular/platform-browser";
import { fromEvent } from "rxjs/observable/fromEvent";

import { LayoutConfigurationService } from "../../services";
import { State as toolbarState } from "../../reducers/toolbar.reducer";
import { of } from "rxjs/observable/of";

const menuState = {
	comfortable: "comfortable",
	compact: "compact",
	summary: "summary"
};

@Component({
	selector: "layout-toolbar",
	templateUrl: "./toolbar-menu.component.html",
	styleUrls: [ "./toolbar-menu.component.css" ],
	animations: [
		trigger("toolbarAnimation", [
			state(
				menuState.comfortable,
				style({
					backgroundColor: "rgba(119,181,63,1)",
					color: "rgba(256,256,256,1)",
					height: "33vh",
					top: "0",
					boxShadow: "1px 1px 3px rgba(0,0,0,0)"
				})
			),
			state(
				menuState.compact,
				style({
					backgroundColor: "rgba(256,256,256,1)",
					height: "128px",
					top: "0",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
				})
			),
			state(
				menuState.summary,
				style({
					backgroundColor: "rgba(256,256,256,1)",
					height: "128px",
					top: "-64px",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
				})
			),
			transition([ menuState.comfortable, " => ", menuState.compact ].join(""), animate("400ms ease-in")),
			transition([ menuState.comfortable, " => ", menuState.summary ].join(""), animate("400ms ease-in")),
			transition([ menuState.summary, " => ", menuState.compact ].join(""), animate("400ms ease-out")),
			transition([ menuState.summary, " => ", menuState.comfortable ].join(""), animate("400ms ease-out")),
			transition([ menuState.compact, " => ", menuState.comfortable ].join(""), animate("400ms ease-out")),
			transition([ menuState.compact, " => ", menuState.summary ].join(""), animate("400ms ease-in"))
		])
	]
})
export class ToolbarMenuComponent {
	showSecondSidenav: Observable<boolean>;
	@Input() showSidebarMenu;
	@Input("app-config") app_config;
	showMainSidenav: Observable<boolean>;
	toolbarAnimationState: Observable<string>;
	menuItems$: Observable<any[]>;
	lastScroll: number;
	config: toolbarState;
	config$: Observable<toolbarState>;
	constructor(
		@Inject(DOCUMENT) private document: Document,
		private _location: Location,
		private store: Store<FeatureState>,
		public configurationService: LayoutConfigurationService
	) {
		this.store.dispatch(new ChangeToolbatToComfortableModeAction());
		this.config$ = this.store.select(getLayoutToolbar);
		this.config$.subscribe((config) => (this.config = config));
		this.lastScroll = this.document.body.scrollTop;
		this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus);
		this.showMainSidenav = this.store.select(fromLayout.getShowMainSidenav);
		this.toolbarAnimationState = this.store.select(fromLayout.getLayoutToolbarMode);
		this.menuItems$ = this.configurationService.config$.map((config) => config.menuItems);
		fromEvent(this.document.body, "scroll").subscribe(() => {
			debugger;
			let scrolledAmount = this.document.body.scrollTop;
			if (scrolledAmount == 0) {
				if (this.config.mode == "comfortable") return;
				this.store.dispatch(new ChangeToolbatToComfortableModeAction());
			} else if (scrolledAmount < 128) {
				if (this.config.mode == "compact") return;
				this.store.dispatch(new ChangeToolbatToCompactModeAction());
			} else if (scrolledAmount > this.lastScroll) {
				if (this.config.mode == "summary") return;
				this.store.dispatch(new ChangeToolbatToSummaryModeAction());
			} else {
				if (this.config.mode == "compact") return;
				this.store.dispatch(new ChangeToolbatToCompactModeAction());
			}
			this.lastScroll = this.document.body.scrollTop;
		});
	}

	@HostListener("body:scroll", [])
	onWindowScroll() {
		// of(1)
	}
	signout() {
		this.store.dispatch(new SignoutAction());
	}
	goback() {
		this._location.back();
	}
	toggleSecondSidebar() {
		let action;
		this.showSecondSidenav.subscribe((state) => {
			action = state ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
		});
		this.store.dispatch(action);
	}
	toggleMainSidebar() {
		let action;
		this.showMainSidenav.subscribe((state) => {
			action = state ? new CloseSidenavAction() : new OpenSidenavAction();
		});
		this.store.dispatch(action);
	}
}
