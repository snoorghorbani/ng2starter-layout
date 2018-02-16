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
	template: `<mat-list class="main-menu-container">   <div *ngIf="authenticated | async">     <a *ngFor="let item of routes" (click)="closeSidebar.emit()" routerLinkActive="active" mat-list-item [routerLink]="[item.route]">       <mat-icon mat-list-icon>{{item.icon}}</mat-icon>       <span mdLine>{{item.title}}</span>     </a>   </div>    <a [@menuItem]="customerMenuItemStatus" *ngIf="signinService.is_admin()" routerLinkActive="active" mat-list-item (click)='changeMenuState()' routerLink="/admin/user/managment">     <mat-icon mat-list-icon>add_shopping_cart</mat-icon>     <span *ngIf="!dataEntryMode" mdLine>       مدیریت       <span *ngIf="!(customer$ | async).Email">         کاربر       </span>       <span *ngIf="(customer$ | async).Email">         {{(customer$ | async).Email}}       </span>       <mat-icon id="clearUserMenuItem" *ngIf="(customerStatus$ | async) == 'succeed'" (click)='clearUserMobile()'>close</mat-icon>     </span>     <form *ngIf="dataEntryMode">       <mat-input-container>         <input #customerMobileInput placeholder="پست الکترونیکی" matInput name="customerMobile" [(ngModel)]="customerMobile"           (ngModelChange)="searchUser()"  (blur)="onUserItemBlur()">           <!-- (ngModelChange)="searchUser()" (blur)="onUserItemBlur()" (keyup)="searchUser($event)"> -->       </mat-input-container>        <div id="userErrorMessage" *ngIf="(customerStatus$ | async) == 'failed'">         کاربر وجود ندارد.       </div>     </form>   </a>   <a [@childMenu]='customerStatus' routerLinkActive="active" mat-list-item [routerLink]="['admin', 'user', customerMobile, 'profile-edit']">     <mat-icon mat-list-icon>blur_on</mat-icon>     <span mdLine>ویرایش پروفایل</span>   </a>   <a [@childMenu]='customerStatus' routerLinkActive="active" mat-list-item [routerLink]="['admin', 'user', customerMobile, 'change-password']">     <mat-icon mat-list-icon>lock</mat-icon>     <span mdLine>تغییر کلمه عبور</span>   </a>   <a [@childMenu]='customerStatus' routerLinkActive="active" mat-list-item [routerLink]="['payment', customerMobile, 'success-payment-report']">     <mat-icon mat-list-icon>done_all</mat-icon>     <span mdLine>گزارش پرداخت های موفق</span>   </a> </mat-list>`,
	styles: [`/* .mat-button {     color: rgba(0,0,0,0.7); } .active-link{     border-bottom:3px solid #b11116; } */  .active {     /* border-bottom:3px solid #b11116; */     background: rgba(0, 0, 0, .15); }  .mat-list-item.active mat-icon {     color: #0072ae; }  a.mat-list-item.child {     margin-right: 20px; }  #userErrorMessage {}  #clearUserMenuItem {     position: absolute;     left: 13px;     top: 13px; }`],
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
