"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var store_1 = require("@ngrx/store");
var animations_1 = require("@angular/animations");
var authentication_1 = require("@soushians/authentication");
var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(store, signinService) {
        this.store = store;
        this.signinService = signinService;
        this.closeSidebar = new core_1.EventEmitter();
        this.routes = routes;
    }
    MainMenuComponent.prototype.ngAfterViewInit = function () { };
    MainMenuComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "layout-main-menu",
                    template: "<mat-list class=\"main-menu-container\">   <div *ngIf=\"authenticated | async\">     <a *ngFor=\"let item of routes\" (click)=\"closeSidebar.emit()\" routerLinkActive=\"active\" mat-list-item [routerLink]=\"[item.route]\">       <mat-icon mat-list-icon>{{item.icon}}</mat-icon>       <span mdLine>{{item.title}}</span>     </a>   </div> </mat-list>",
                    styles: ["/* .mat-button {     color: rgba(0,0,0,0.7); } .active-link{     border-bottom:3px solid #b11116; } */  .active {     /* border-bottom:3px solid #b11116; */     background: rgba(0, 0, 0, .15); }  .mat-list-item.active mat-icon {     color: #0072ae; }  a.mat-list-item.child {     margin-right: 20px; }  #userErrorMessage {}  #clearUserMenuItem {     position: absolute;     left: 13px;     top: 13px; }"],
                    animations: [
                        animations_1.trigger("childMenu", [
                            animations_1.state("inactive", animations_1.style({
                                // transform: 'scale(1)',
                                height: "0px",
                                opacity: "0"
                            })),
                            animations_1.state("active", animations_1.style({
                                // transform: 'scale(1.1)',
                                height: "48px",
                                opacity: "1"
                            })),
                            animations_1.transition("inactive => active", animations_1.animate("100ms ease-in")),
                            animations_1.transition("active => inactive", animations_1.animate("100ms ease-out"))
                        ]),
                        animations_1.trigger("menuItem", [
                            animations_1.state("inactive", animations_1.style({
                                height: "48px"
                            })),
                            animations_1.state("active", animations_1.style({
                                height: "100px"
                            })),
                            animations_1.transition("inactive => active", animations_1.animate("100ms ease-in")),
                            animations_1.transition("active => inactive", animations_1.animate("100ms ease-out"))
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    MainMenuComponent.ctorParameters = function () { return [
        { type: store_1.Store, },
        { type: authentication_1.SigninService, },
    ]; };
    MainMenuComponent.propDecorators = {
        "closeSidebar": [{ type: core_1.Output },],
        "authenticated": [{ type: core_1.Input },],
        "customerMobileInput": [{ type: core_1.ViewChild, args: ["customerMobileInput",] },],
    };
    return MainMenuComponent;
}());
exports.MainMenuComponent = MainMenuComponent;
var routes = [
    {
        route: "/diagrams",
        icon: "multiline_chart",
        roles: ["Admin", "User"],
        title: "صفحه اصلی"
    },
    {
        route: "/configs",
        icon: "settings",
        roles: ["Admin"],
        title: "تنظیمات"
    },
    {
        route: "/source",
        icon: "device_hub",
        roles: ["Admin"],
        title: "آدرس سرویس ها"
    }
];
//# sourceMappingURL=main-menu.component.js.map