"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DashboardLinksComponent = /** @class */ (function () {
    function DashboardLinksComponent() {
        this.links = [
            {
                title: "مشاهده حساب کاریری",
                route: "/user/panel/profile",
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                icon: "credit_card"
            },
            {
                route: '/user/panel/password/change',
                title: 'تغییر کلمه عبور',
                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                icon: 'security'
            }
        ];
    }
    DashboardLinksComponent.prototype.ngOnInit = function () {
    };
    DashboardLinksComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'user-dashboard-links',
                    template: "<div fxLayout='row' fxLayoutWrap id=\"con\">     <button fxFlex=\"31\" class='link' mat-raised-button [routerLink]='link.route' *ngFor='let link of links'>          <div fxLayout='column' fxLayoutAlign='center center'>             <mat-icon color='primary'>{{link.icon}}</mat-icon>             <h3 class='title'>{{link.title}}</h3>             <div class='description'>{{link.description}}</div>         </div>      </button> </div>",
                    styles: ["#con{     // padding-top:25px;     // padding-left:25px;     [fxflex] {         margin-right: 25px;     } } :host{     width:100%; }  button mat-icon {     font-size: 48px;     width: 48px;     height: 48px; }  button.link {     padding: 25px 15px;     margin-bottom:25px; }  .title {     margin-top: 0px;     margin-bottom: 5px; }  .description {     overflow: hidden;     text-overflow: ellipsis;     white-space: nowrap;     width: 90%; }"]
                },] },
    ];
    /** @nocollapse */
    DashboardLinksComponent.ctorParameters = function () { return []; };
    return DashboardLinksComponent;
}());
exports.DashboardLinksComponent = DashboardLinksComponent;
//# sourceMappingURL=dashboard-links.component.js.map