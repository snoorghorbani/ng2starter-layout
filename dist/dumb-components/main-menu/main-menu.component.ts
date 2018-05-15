import { Component, Output, EventEmitter, Input, OnInit, ViewChild, ElementRef } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { Routes } from "@angular/router";
import { trigger, state, style, transition, animate } from "@angular/animations";

import { responseStatusTypes } from "@soushians/shared";
import { SigninService } from "@soushians/authentication";

import * as layoutReducer from "../../reducers";
import { LayoutConfigurationService } from "../../services";
import { LayoutModuleConfig } from "../../layout.config";

@Component({
	selector: "ngs-layout-main-menu",
	template: `<mat-list class="main-menu-container">   <div *ngIf="authenticated | async">     <a *ngFor="let item of routes | async" (click)="closeSidebar.emit()" routerLinkActive="active" mat-list-item [routerLink]="[item.route]">       <mat-icon mat-list-icon>{{item.icon}}</mat-icon>       <span mdLine>{{item.title}}</span>     </a>   </div> </mat-list>`,
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
export class MainMenuComponent {
	@Output() closeSidebar = new EventEmitter();

	@Input() authenticated: Observable<boolean>;

	customerStatus$: Observable<responseStatusTypes>;
	routes: any = this.configurationService.config$.map((config) => config.menuItems);

	@ViewChild("customerMobileInput") customerMobileInput: ElementRef;
	constructor(
		private store: Store<layoutReducer.State>,
		public signinService: SigninService,
		public configurationService: LayoutConfigurationService
	) {}
}
