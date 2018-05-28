import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Input } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Observable } from "rxjs/Observable";
// import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { SwPush } from "@angular/service-worker";
import { BehaviorSubject } from "rxjs";
import { MatSidenav, MatSidenavContainer } from "@angular/material";

import { ConfigModel, getAppConfig } from "@soushians/config";
import { UserModel, getUserInfo } from "@soushians/user";

import {
	FeatureState,
	getShowMainSidenav,
	getMainSideNavMode,
	getShowSecondSidebarStatus,
	getSecondSidebarMode,
	getLayoutMode,
	getLayoutToolbarMode
} from "../../reducers";

import {
	CloseSecondSidenavAction,
	ChangeSecondSidenavMode,
	OpenSecondSidenavAction,
	ChangeSideNavMode,
	CloseSidenavAction,
	OpenSidenavAction,
	ChangeLayout,
	ChangeToolbatToComfortableModeAction
} from "../../actions";

@Component({
	selector: "layout-main",
	template: `<div #mainSideNav [className]="toolbarAnimationState | async">   <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color="primary" mode="query"></mat-progress-bar> -->   <layout-toolbar [user]="user$ | async" [showSidebarMenu]='showSidebarMenu | async' [app-config]="app_config"></layout-toolbar>      <mat-sidenav-container id="layout-sidnav">     <mat-sidenav [mode]="mainSidenavMode | async" [opened]='showMainSidenav | async' #sidebar (closedStart)="onSidebarClosedStart()">       <mat-nav-list>         <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)="sidebar.close()" (click)="onSecondSidebarClosedStart()"></ngs-layout-main-menu>       </mat-nav-list>     </mat-sidenav>     <!-- <mat-sidenav [mode]="secondSidenavMode | async" [opened]='showSecondSidenav | async' (closedStart)="onSecondSidebarClosedStart()"       position="end" #second_sidebar class="second_sidebar">       <mat-nav-list fxLayout='column'>       </mat-nav-list>     </mat-sidenav> -->     <div fxFlexLayout='column' id="app-main-container" fxLayoutAlign='center center'>       <div fxFlex='0 0 100'>         <router-outlet></router-outlet>         <footer>           <app-footer></app-footer>         </footer>       </div>     </div>   </mat-sidenav-container> </div>`,
	styles: [`#purchase-fab-button { 	position: fixed; 	bottom: 23px; 	left: 31px; }  md-progress-bar { 	position: absolute !important; } .with-margin #app-main-container { 	margin-top: 25px; 	padding-right: 25px; 	padding-left: 25px; }  .second_sidebar { 	width: 380px; }  .more-detail { 	margin: 8px; 	box-sizing: border-box; 	padding: 10px; 	text-align: center; 	width: 96%; 	border: 1px solid #dedede; 	outline: 0; 	cursor: pointer; 	transition: all .3s ease; 	&:hover { 		background: #eee; 	} }`]
})
export class MainComponent {
	user$: Observable<UserModel>;
	progressStatus$: Observable<boolean>;
	showSidebarMenu = new BehaviorSubject(true);
	//user$: Observable<UserModel>;
	showMainSidenav: Observable<boolean>;
	mainSidenavMode: Observable<"side" | "over" | "push">;
	layoutMode: Observable<"with-margin" | "without-margin" | "default">;
	@Input("app-config") app_config: ConfigModel<any>;
	width = 100;
	showSecondSidenav: Observable<boolean>;
	secondSidenavMode: Observable<"side" | "over" | "push">;
	toolbarAnimationState: Observable<string>;
	@ViewChild("mainSideNav") mainSideNav: ElementRef;

	constructor(private store: Store<FeatureState>, private router: Router) {
		this.store.dispatch(new ChangeSideNavMode("push"));
		this.user$ = this.store.select((s) => (s as any).user.user.data);
		this.user$.subscribe((data) => {
			debugger;
		});
		this.showMainSidenav = this.store.select(getShowMainSidenav);
		this.mainSidenavMode = this.store.select(getMainSideNavMode);
		this.toolbarAnimationState = this.store.select(getLayoutToolbarMode);

		//#region manage second sidebar
		this.store.dispatch(new ChangeSecondSidenavMode("push"));
		this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus);
		this.secondSidenavMode = this.store.select(getSecondSidebarMode);
		//#endregion manage second sidebar

		this.layoutMode = this.store.select(getLayoutMode);

		this.router.events.filter((data) => data instanceof NavigationEnd).subscribe((event) => {
			var hideSituations = [
				(event as NavigationEnd).urlAfterRedirects == "/auth/signin",
				(event as NavigationEnd).urlAfterRedirects == "/auth/signup/register",
				(event as NavigationEnd).urlAfterRedirects == "/auth/signup/verification",
				(event as NavigationEnd).urlAfterRedirects == "/user/password/reset"
			];
			if (hideSituations.some((i) => i)) this.showSidebarMenu.next(false);
			else this.showSidebarMenu.next(true);
		});

		this.layoutMode.subscribe((mode) => {
			if (!this.mainSideNav) return;
			(this.mainSideNav.nativeElement as HTMLDivElement).className = "";
			(this.mainSideNav.nativeElement as HTMLDivElement).classList.add(mode);
		});
	}

	// ngAfterViewInit() {
	// 	this.store.dispatch(new ChangeLayout("with-margin"));
	// }

	onSecondSidebarClosedStart() {
		this.store.dispatch(new CloseSecondSidenavAction());
	}

	onSidebarClosedStart() {
		this.store.dispatch(new CloseSidenavAction());
	}
}
