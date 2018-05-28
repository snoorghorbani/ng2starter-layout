import { Component, Input, HostListener, Inject } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { Location } from "@angular/common";
import { Observable } from "rxjs/Observable";
import { from } from "rxjs/observable/from";
import { DOCUMENT } from "@angular/platform-browser";
import { fromEvent } from "rxjs/observable/fromEvent";
import { of } from "rxjs/observable/of";
import { trigger, state, transition, style, animate } from "@angular/animations";

import { UserModel } from "@soushians/user";
import { LayoutConfigModel } from "@soushians/config";

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

import { LayoutConfigurationService } from "../../services";
import { State as toolbarState } from "../../reducers/toolbar.reducer";

@Component({
	selector: "layout-toolbar",
	template: `<mat-toolbar [@toolbarAnimation]="toolbarAnimationState | async">   <mat-toolbar-row>     <app-logo-container fxFlex="none" fxLayoutAlign="end center"></app-logo-container>      <button type="button" *ngIf='showSidebarMenu' (click)="toggleMainSidebar()" mat-icon-button fxFlex="nogrow" fxLayoutAlign="center center">       <mat-icon>menu</mat-icon>     </button>     <span id='app-name'>       {{app_config?.Config.AppTitle}}     </span>     <app-title fxFlex fxLayoutAlign="start center"></app-title>     <app-search-box fxFlex fxLayoutAlign="end center"></app-search-box>          <button mat-icon-button type="button" (click)="toggleSecondSidebar()" fxFlex="nogrow" fxLayoutAlign="center center">       <mat-icon>notifications</mat-icon>     </button>     <button *ngIf="user" mat-icon-button [matMenuTriggerFor]="toolbarMenu1">       <mat-icon>account_circle</mat-icon>     </button>         <mat-menu #toolbarMenu1>           <button routerLink='/user/panel' mat-menu-item>             <mat-icon>fingerprint</mat-icon>             <span>{{user?.Username}}</span>           </button>                      <button (click)='signout()' mat-menu-item>             <mat-icon>exit_to_app</mat-icon>             <span>خروج</span>           </button>         </mat-menu>     <button mat-icon-button (click)='goback()'>       <mat-icon>arrow_back</mat-icon>     </button>        </mat-toolbar-row>   <mat-toolbar-row>     <button mat-button        *ngFor="let menu of menuItems$ | async"       routerLinkActive="active"       [routerLink]="[menu.route]"      >     <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->     <span>{{menu.title}}</span>   </button>   </mat-toolbar-row> </mat-toolbar>`,
	styles: [`/*.upper-menu { float: left; position: absolute; left: 0; top: 30px; } .upper-menu a { border-left: 1px solid #eee; color: #222; padding: 0 5px 0 8px; font-size: 14px; text-decoration: none; cursor: pointer; } .upper-menu a:hover { color: #f16321; } .upper-menu .last { border: none; } .upper-menu-div { padding: 0 10px; border-left: 1px solid #ddd; } .upper-menu-div-last { padding: 0 10px; }  :host{     width: 100%; }*/`],
	animations: [
		trigger("toolbarAnimation", [
			state(
				"comfortable",
				style({
					backgroundColor: "rgba(119,181,63,1)",
					color: "rgba(256,256,256,1)",
					height: "33vh",
					top: "0",
					boxShadow: "1px 1px 3px rgba(0,0,0,0)"
				})
			),
			state(
				"compact",
				style({
					backgroundColor: "rgba(256,256,256,1)",
					height: "128px",
					top: "0",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
				})
			),
			state(
				"summary",
				style({
					backgroundColor: "rgba(256,256,256,1)",
					height: "128px",
					top: "-64px",
					boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
				})
			),
			transition("comfortable => compact", animate("400ms ease-in")),
			transition("comfortable => summary", animate("400ms ease-in")),
			transition("summary => compact", animate("400ms ease-out")),
			transition("summary => comfortable", animate("400ms ease-out")),
			transition("compact => comfortable", animate("400ms ease-out")),
			transition("compact => summary", animate("400ms ease-in"))
		])
	]
})
export class ToolbarMenuComponent {
	showSecondSidenav: Observable<boolean>;
	@Input() showSidebarMenu;
	@Input("app-config") app_config;
	@Input() user: UserModel;
	showMainSidenav: Observable<boolean>;
	toolbarAnimationState: Observable<"comfortable" | "compact" | "summary">;
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
			let scrolledAmount = this.document.body.scrollTop;
			// let scrollToTop = (scrolledAmount - this.lastScroll < 0) && (this.document.body.scrollHeight - ) ;
			let scrollToTop = scrolledAmount - this.lastScroll < 0;
			this.lastScroll = this.document.body.scrollTop;
			if (scrolledAmount == 0) {
				if (this.config.mode == "comfortable") return;
				this.store.dispatch(new ChangeToolbatToComfortableModeAction());
			} else if (scrolledAmount < 128 || scrollToTop) {
				if (this.config.mode == "compact") return;
				this.store.dispatch(new ChangeToolbatToCompactModeAction());
			} else {
				if (this.config.mode == "summary") return;
				this.store.dispatch(new ChangeToolbatToSummaryModeAction());
			}
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
