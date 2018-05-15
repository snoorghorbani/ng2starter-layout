"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var actions_1 = require("../../actions");
var reducers_1 = require("../../reducers");
var router_1 = require("@angular/router");
var TitleComponent = /** @class */ (function () {
    function TitleComponent(store, router) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.mapper = [];
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('profile-edit')) ? 'ویرایش اطلاعات کاربری' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('success-payment-report')) ? 'گزارش پرداخت های موفق' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('failed-login-report')) ? 'گزارش خطاها' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('active-session-info')) ? 'جزئیات بسته فعال' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('session-detail-report')) ? 'جزئیات اتصال' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('daily-session-report')) ? 'گزارش تجمیعی روزانه' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('monthly-session-report')) ? 'گزارش تجمیعی ماهانه' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.startsWith('/packages/user-packages')) ? 'لیست پکیج ها' : null;
        // });
        // this.mapper.push((event: NavigationEnd) => {
        //     return (event.url.endsWith('/change-password')) ? 'تغییر کلمه عبور' : null;
        // });
        this.title$ = this.store.select(reducers_1.getTitle);
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                var title = "";
                _this.mapper.forEach(function (mapper) {
                    var res = mapper(event);
                    if (res) {
                        title = res;
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                _this.store.dispatch(new actions_1.TitleChangedAction("/ " + title || ""));
            }
        });
    }
    TitleComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-title',
                    template: "<div id=\"title\">     {{title$ | async}} </div>",
                    styles: ["#title { \tmargin-right: -30px; \tfont-weight: bolder; \tfont-size: 13px; \t// background: white; \tpadding: 18px 40px 18px 40px; \t// color: #444; }"]
                },] },
    ];
    /** @nocollapse */
    TitleComponent.ctorParameters = function () { return [
        { type: store_1.Store, },
        { type: router_1.Router, },
    ]; };
    return TitleComponent;
}());
exports.TitleComponent = TitleComponent;
//# sourceMappingURL=title.component.js.map