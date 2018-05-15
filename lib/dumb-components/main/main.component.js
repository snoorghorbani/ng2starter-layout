"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var store_1 = require("@ngrx/store");
var rxjs_1 = require("rxjs");
var config_1 = require("@soushians/config");
var reducers_1 = require("../../reducers");
var actions_1 = require("../../actions");
var MainComponent = /** @class */ (function () {
    function MainComponent(store, router) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.showSidebarMenu = new rxjs_1.BehaviorSubject(true);
        this.width = 100;
        this.store.dispatch(new actions_1.ChangeSideNavMode("push"));
        this.showMainSidenav = this.store.select(reducers_1.getShowMainSidenav);
        this.mainSidenavMode = this.store.select(reducers_1.getMainSideNavMode);
        this.toolbarAnimationState = this.store.select(reducers_1.getLayoutToolbarMode);
        //#region manage second sidebar
        this.store.dispatch(new actions_1.ChangeSecondSidenavMode("push"));
        this.showSecondSidenav = this.store.select(reducers_1.getShowSecondSidebarStatus);
        this.secondSidenavMode = this.store.select(reducers_1.getSecondSidebarMode);
        //#endregion manage second sidebar
        this.layoutMode = this.store.select(reducers_1.getLayoutMode);
        this.router.events.filter(function (data) { return data instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            var hideSituations = [
                event.urlAfterRedirects == "/auth/signin",
                event.urlAfterRedirects == "/auth/signup/register",
                event.urlAfterRedirects == "/auth/signup/verification",
                event.urlAfterRedirects == "/user/password/reset"
            ];
            if (hideSituations.some(function (i) { return i; }))
                _this.showSidebarMenu.next(false);
            else
                _this.showSidebarMenu.next(true);
        });
        this.layoutMode.subscribe(function (mode) {
            if (!_this.mainSideNav)
                return;
            _this.mainSideNav.nativeElement.className = "";
            _this.mainSideNav.nativeElement.classList.add(mode);
        });
    }
    // ngAfterViewInit() {
    // 	this.store.dispatch(new ChangeLayout("with-margin"));
    // }
    // ngAfterViewInit() {
    // 	this.store.dispatch(new ChangeLayout("with-margin"));
    // }
    MainComponent.prototype.onSecondSidebarClosedStart = 
    // ngAfterViewInit() {
    // 	this.store.dispatch(new ChangeLayout("with-margin"));
    // }
    function () {
        this.store.dispatch(new actions_1.CloseSecondSidenavAction());
    };
    MainComponent.prototype.onSidebarClosedStart = function () {
        this.store.dispatch(new actions_1.CloseSidenavAction());
    };
    MainComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "layout-main",
                    template: "<div #mainSideNav [className]=\"toolbarAnimationState | async\">   <!-- <mat-progress-bar *ngIf='progressStatus$ | async' color=\"primary\" mode=\"query\"></mat-progress-bar> -->   <layout-toolbar [showSidebarMenu]='showSidebarMenu | async' [app-config]=\"app_config\"></layout-toolbar>    <mat-sidenav-container>     <mat-sidenav [mode]=\"mainSidenavMode | async\" [opened]='showMainSidenav | async' #sidebar (closedStart)=\"onSidebarClosedStart()\">       <mat-nav-list>         <ngs-layout-main-menu [authenticated]='showSidebarMenu' (closeSidebar)=\"sidebar.close()\" (click)=\"onSecondSidebarClosedStart()\"></ngs-layout-main-menu>       </mat-nav-list>     </mat-sidenav>     <!-- <mat-sidenav [mode]=\"secondSidenavMode | async\" [opened]='showSecondSidenav | async' (closedStart)=\"onSecondSidebarClosedStart()\"       position=\"end\" #second_sidebar class=\"second_sidebar\">       <mat-nav-list fxLayout='column'>       </mat-nav-list>     </mat-sidenav> -->     <div fxFlexLayout='column' id=\"app-main-container\" fxLayoutAlign='center center'>       <div fxFlex='0 0 100'>         <router-outlet></router-outlet>         <footer>           <app-footer></app-footer>         </footer>       </div>     </div>   </mat-sidenav-container> </div>",
                    styles: ["#purchase-fab-button { \tposition: fixed; \tbottom: 23px; \tleft: 31px; }  md-progress-bar { \tposition: absolute !important; } .with-margin #app-main-container { \tmargin-top: 25px; \tpadding-right: 25px; \tpadding-left: 25px; }  .second_sidebar { \twidth: 380px; }  .more-detail { \tmargin: 8px; \tbox-sizing: border-box; \tpadding: 10px; \ttext-align: center; \twidth: 96%; \tborder: 1px solid #dedede; \toutline: 0; \tcursor: pointer; \ttransition: all .3s ease; \t&:hover { \t\tbackground: #eee; \t} }"]
                },] },
    ];
    /** @nocollapse */
    MainComponent.ctorParameters = function () { return [
        { type: store_1.Store, },
        { type: router_1.Router, },
    ]; };
    MainComponent.propDecorators = {
        "app_config": [{ type: core_1.Input, args: ["app-config",] },],
        "mainSideNav": [{ type: core_1.ViewChild, args: ["mainSideNav",] },],
    };
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map