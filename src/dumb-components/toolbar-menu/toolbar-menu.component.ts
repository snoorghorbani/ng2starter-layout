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
import { FeatureState, getShowSecondSidebarStatus } from "../../reducers";
import { trigger, state, transition, style, animate } from "@angular/animations";
import { from } from "rxjs/observable/from";
import { DOCUMENT } from "@angular/platform-browser";
import { LayoutConfigurationService } from "../../services";
import { fromEvent } from "rxjs/observable/fromEvent";

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
	constructor(
		@Inject(DOCUMENT) private document: Document,
		private _location: Location,
		private store: Store<FeatureState>,
		public configurationService: LayoutConfigurationService
	) {
		this.store.dispatch(new ChangeToolbatToComfortableModeAction());
		this.lastScroll = this.document.body.scrollTop;
		this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus);
		this.showMainSidenav = this.store.select(fromLayout.getShowMainSidenav);
		this.toolbarAnimationState = this.store.select(fromLayout.getLayoutToolbarMode);
		this.menuItems$ = this.configurationService.config$.map((config) => config.menuItems);
	}

	@HostListener("body:scroll", [])
	onWindowScroll() {
		debugger;
		let scrolledAmount = this.document.body.scrollTop;
		console.log(scrolledAmount);
		if (scrolledAmount == 0) {
			this.store.dispatch(new ChangeToolbatToComfortableModeAction());
		} else if (scrolledAmount < 128) {
			this.store.dispatch(new ChangeToolbatToCompactModeAction());
		} else if (scrolledAmount > this.lastScroll) {
			this.store.dispatch(new ChangeToolbatToSummaryModeAction());
		} else {
			this.store.dispatch(new ChangeToolbatToCompactModeAction());
		}
		this.lastScroll = this.document.body.scrollTop;
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
