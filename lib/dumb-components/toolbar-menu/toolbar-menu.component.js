"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var common_1 = require("@angular/common");
var fromLayout = require("../../reducers");
var actions_1 = require("../../actions");
var reducers_1 = require("../../reducers");
var animations_1 = require("@angular/animations");
var platform_browser_1 = require("@angular/platform-browser");
var services_1 = require("../../services");
var menuState = {
    comfortable: "comfortable",
    compact: "compact",
    summary: "summary"
};
var ToolbarMenuComponent = /** @class */ (function () {
    function ToolbarMenuComponent(document, _location, store, configurationService) {
        this.document = document;
        this._location = _location;
        this.store = store;
        this.configurationService = configurationService;
        this.store.dispatch(new actions_1.ChangeToolbatToComfortableModeAction());
        this.lastScroll = this.document.body.scrollTop;
        this.showSecondSidenav = this.store.select(reducers_1.getShowSecondSidebarStatus);
        this.showMainSidenav = this.store.select(fromLayout.getShowMainSidenav);
        this.toolbarAnimationState = this.store.select(fromLayout.getLayoutToolbarMode);
        this.menuItems$ = this.configurationService.config$.map(function (config) { return config.menuItems; });
    }
    ToolbarMenuComponent.prototype.onWindowScroll = function () {
        debugger;
        var scrolledAmount = this.document.body.scrollTop;
        console.log(scrolledAmount);
        if (scrolledAmount == 0) {
            this.store.dispatch(new actions_1.ChangeToolbatToComfortableModeAction());
        }
        else if (scrolledAmount < 128) {
            this.store.dispatch(new actions_1.ChangeToolbatToCompactModeAction());
        }
        else if (scrolledAmount > this.lastScroll) {
            this.store.dispatch(new actions_1.ChangeToolbatToSummaryModeAction());
        }
        else {
            this.store.dispatch(new actions_1.ChangeToolbatToCompactModeAction());
        }
        this.lastScroll = this.document.body.scrollTop;
    };
    ToolbarMenuComponent.prototype.signout = function () {
        this.store.dispatch(new actions_1.SignoutAction());
    };
    ToolbarMenuComponent.prototype.goback = function () {
        this._location.back();
    };
    ToolbarMenuComponent.prototype.toggleSecondSidebar = function () {
        var action;
        this.showSecondSidenav.subscribe(function (state) {
            action = state ? new actions_1.CloseSecondSidenavAction() : new actions_1.OpenSecondSidenavAction();
        });
        this.store.dispatch(action);
    };
    ToolbarMenuComponent.prototype.toggleMainSidebar = function () {
        var action;
        this.showMainSidenav.subscribe(function (state) {
            action = state ? new actions_1.CloseSidenavAction() : new actions_1.OpenSidenavAction();
        });
        this.store.dispatch(action);
    };
    ToolbarMenuComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "layout-toolbar",
                    template: "<mat-toolbar [@toolbarAnimation]=\"toolbarAnimationState | async\">   <mat-toolbar-row>     <app-logo-container fxFlex=\"none\" fxLayoutAlign=\"end center\"></app-logo-container>      <button type=\"button\" *ngIf='showSidebarMenu' (click)=\"toggleMainSidebar()\" mat-icon-button fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">       <mat-icon>menu</mat-icon>     </button>     <span id='app-name'>       {{app_config?.Config.AppTitle}}     </span>     <app-title fxFlex fxLayoutAlign=\"start center\"></app-title>     <app-search-box fxFlex fxLayoutAlign=\"end center\"></app-search-box>          <button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">       <mat-icon>notifications</mat-icon>     </button>     <button mat-icon-button [matMenuTriggerFor]=\"toolbarMenu1\">       <mat-icon>account_circle</mat-icon>     </button>     <button mat-icon-button (click)='goback()'>       <mat-icon>arrow_back</mat-icon>     </button>          <mat-menu #toolbarMenu1>       <button routerLink='/user/panel' mat-menu-item>         <mat-icon>fingerprint</mat-icon>         <span>\u067E\u0646\u0644 \u06A9\u0627\u0631\u0628\u0631\u06CC</span>       </button>              <button (click)='signout()' mat-menu-item>         <mat-icon>exit_to_app</mat-icon>         <span>\u062E\u0631\u0648\u062C</span>       </button>     </mat-menu>   </mat-toolbar-row>   <mat-toolbar-row>     <button mat-button        *ngFor=\"let menu of menuItems$ | async\"       routerLinkActive=\"active\"       [routerLink]=\"[menu.route]\"      >     <!-- <mat-icon mat-list-icon>{{menu.icon}}</mat-icon> -->     <span>{{menu.title}}</span>   </button>   </mat-toolbar-row> </mat-toolbar>",
                    styles: ["/*.upper-menu { float: left; position: absolute; left: 0; top: 30px; } .upper-menu a { border-left: 1px solid #eee; color: #222; padding: 0 5px 0 8px; font-size: 14px; text-decoration: none; cursor: pointer; } .upper-menu a:hover { color: #f16321; } .upper-menu .last { border: none; } .upper-menu-div { padding: 0 10px; border-left: 1px solid #ddd; } .upper-menu-div-last { padding: 0 10px; }  :host{     width: 100%; }*/"],
                    animations: [
                        animations_1.trigger("toolbarAnimation", [
                            animations_1.state(menuState.comfortable, animations_1.style({
                                backgroundColor: "rgba(119,181,63,1)",
                                color: "rgba(256,256,256,1)",
                                height: "33vh",
                                top: "0",
                                boxShadow: "1px 1px 3px rgba(0,0,0,0)"
                            })),
                            animations_1.state(menuState.compact, animations_1.style({
                                backgroundColor: "rgba(256,256,256,1)",
                                height: "128px",
                                top: "0",
                                boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                            })),
                            animations_1.state(menuState.summary, animations_1.style({
                                backgroundColor: "rgba(256,256,256,1)",
                                height: "128px",
                                top: "-64px",
                                boxShadow: "1px 1px 3px rgba(0,0,0,0.5)"
                            })),
                            animations_1.transition([menuState.comfortable, " => ", menuState.compact].join(""), animations_1.animate("400ms ease-in")),
                            animations_1.transition([menuState.comfortable, " => ", menuState.summary].join(""), animations_1.animate("400ms ease-in")),
                            animations_1.transition([menuState.summary, " => ", menuState.compact].join(""), animations_1.animate("400ms ease-out")),
                            animations_1.transition([menuState.summary, " => ", menuState.comfortable].join(""), animations_1.animate("400ms ease-out")),
                            animations_1.transition([menuState.compact, " => ", menuState.comfortable].join(""), animations_1.animate("400ms ease-out")),
                            animations_1.transition([menuState.compact, " => ", menuState.summary].join(""), animations_1.animate("400ms ease-in"))
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    ToolbarMenuComponent.ctorParameters = function () { return [
        { type: Document, decorators: [{ type: core_1.Inject, args: [platform_browser_1.DOCUMENT,] },] },
        { type: common_1.Location, },
        { type: store_1.Store, },
        { type: services_1.LayoutConfigurationService, },
    ]; };
    ToolbarMenuComponent.propDecorators = {
        "showSidebarMenu": [{ type: core_1.Input },],
        "app_config": [{ type: core_1.Input, args: ["app-config",] },],
        "onWindowScroll": [{ type: core_1.HostListener, args: ["body:scroll", [],] },],
    };
    return ToolbarMenuComponent;
}());
exports.ToolbarMenuComponent = ToolbarMenuComponent;
//# sourceMappingURL=toolbar-menu.component.js.map