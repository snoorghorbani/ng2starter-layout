"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var common_1 = require("@angular/common");
var actions_1 = require("../../actions");
var reducers_1 = require("../../reducers");
var ToolbarMenuComponent = /** @class */ (function () {
    function ToolbarMenuComponent(_location, store) {
        this._location = _location;
        this.store = store;
        this.showSecondSidenav = this.store.select(reducers_1.getShowSecondSidebarStatus);
    }
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
    ToolbarMenuComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-toolbar-menu',
                    template: "<button mat-icon-button type=\"button\" (click)=\"toggleSecondSidebar()\" fxFlex=\"nogrow\" fxLayoutAlign=\"center center\">   <mat-icon>notifications</mat-icon> </button> <button mat-icon-button [matMenuTriggerFor]=\"toolbarMenu1\">   <mat-icon>account_circle</mat-icon> </button> <button mat-icon-button (click)='goback()'>   <mat-icon>arrow_back</mat-icon> </button>  <mat-menu #toolbarMenu1>   <button routerLink='/user/panel' mat-menu-item>     <mat-icon>fingerprint</mat-icon>     <span>\u067E\u0646\u0644 \u06A9\u0627\u0631\u0628\u0631\u06CC</span>   </button>    <button (click)='signout()' mat-menu-item>     <mat-icon>exit_to_app</mat-icon>     <span>\u062E\u0631\u0648\u062C</span>   </button>  </mat-menu>",
                    styles: ["/*.upper-menu { float: left; position: absolute; left: 0; top: 30px; } .upper-menu a { border-left: 1px solid #eee; color: #222; padding: 0 5px 0 8px; font-size: 14px; text-decoration: none; cursor: pointer; } .upper-menu a:hover { color: #f16321; } .upper-menu .last { border: none; } .upper-menu-div { padding: 0 10px; border-left: 1px solid #ddd; } .upper-menu-div-last { padding: 0 10px; }  :host{     width: 100%; }*/"]
                },] },
    ];
    /** @nocollapse */
    ToolbarMenuComponent.ctorParameters = function () { return [
        { type: common_1.Location, },
        { type: store_1.Store, },
    ]; };
    return ToolbarMenuComponent;
}());
exports.ToolbarMenuComponent = ToolbarMenuComponent;
//# sourceMappingURL=toolbar-menu.component.js.map