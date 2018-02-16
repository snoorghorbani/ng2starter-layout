import { Component, Output, EventEmitter, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

import * as appReducer from "app/reducers";
import * as authReducer from "@soushians/authentication";
import * as fromUser from "@soushians/user";
import { ProfileViewModel, UserModel } from "app/models/user";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { responseStatusTypes } from "@soushians/shared";
import { SigninService } from "@soushians/authentication";
import { ClearSearchedUser, Search } from "@soushians/user";

@Component({
	selector: "layout-main-menu",
	templateUrl: "./main-menu.component.html",
	styleUrls: [ "./main-menu.component.css" ],
	animations: [
		trigger("childMenu", [
			state(
				"inactive",
				style({
					// transform: 'scale(1)',
					height: "0px",
					opacity: "0"
				})
			),
			state(
				"active",
				style({
					// transform: 'scale(1.1)',
					height: "48px",
					opacity: "1"
				})
			),
			transition("inactive => active", animate("100ms ease-in")),
			transition("active => inactive", animate("100ms ease-out"))
		]),
		trigger("menuItem", [
			state(
				"inactive",
				style({
					height: "48px"
				})
			),
			state(
				"active",
				style({
					height: "100px"
				})
			),
			transition("inactive => active", animate("100ms ease-in")),
			transition("active => inactive", animate("100ms ease-out"))
		])
	]
})
export class MainMenuComponent implements AfterViewInit {
	@Output() closeSidebar = new EventEmitter();

	@Input() authenticated: Observable<boolean>;

	user$: Observable<any>;
	dataEntryMode = false;
	customerMobile: string;
	customer$: Observable<UserModel>;
	customerStatus$: Observable<responseStatusTypes>;
	customerStatus: "active" | "inactive" = "inactive";
	customerMenuItemStatus: "active" | "inactive" = "inactive";
	routes = [];

	@ViewChild("customerMobileInput") customerMobileInput: ElementRef;
	constructor(private store: Store<appReducer.State>, public signinService: SigninService) {
		this.user$ = this.store.select(authReducer.getUser);
		this.customer$ = this.store.select(fromUser.getUserInfo);
		this.customerStatus$ = this.store.select(fromUser.getSearchStatus);
	}

	ngAfterViewInit() {
		this.user$.subscribe((data) => {
			this.routes = routes.filter((route) =>
				data.Roles.some((customerRole) => (route.roles as any).includes(customerRole))
			);
		});
		this.customer$.subscribe((data) => {
			if (!("_id" in data)) return;
			this.customerStatus = "active";
			this.customerMobile = data.Email;
			this.exitDataEntryMode();
		});
	}
	private enterDataEntryMode() {
		this.customerMenuItemStatus = "active";
		this.dataEntryMode = true;
	}
	private exitDataEntryMode() {
		this.customerMenuItemStatus = "inactive";
		this.dataEntryMode = false;
	}
	changeMenuState() {
		this.enterDataEntryMode();
		setTimeout(() => {
			this.customerMobileInput.nativeElement.focus();
		}, 222);
	}
	clearUserMobile() {
		this.customerMobile = "";
		this.customerStatus = "inactive";
		this.store.dispatch(new ClearSearchedUser());
	}
	onUserItemBlur() {
		this.exitDataEntryMode();
	}
	searchUser() {
		if (this.customerMobile.endsWith("@rasana.ir")) {
			this.store.dispatch(new Search({ Email: this.customerMobile } as ProfileViewModel.Request));
		}
	}
}

var routes = [
	{
		route: "/diagrams",
		icon: "multiline_chart",
		roles: [ "Admin", "User" ],
		title: "صفحه اصلی"
	},
	{
		route: "/configs",
		icon: "settings",
		roles: [ "Admin" ],
		title: "تنظیمات"
	},
	{
		route: "/source",
		icon: "device_hub",
		roles: [ "Admin" ],
		title: "آدرس سرویس ها"
	}
];
