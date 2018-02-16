"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var models_1 = require("../../models");
var FeatureReducer = require("../../feature/feature.reducers");
var rxjs_1 = require("rxjs");
var search_actions_1 = require("../search.actions");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(store) {
        this.store = store;
        this.formGroup = models_1.ProfileViewModel.Request.formGroup;
        this.userDataLoaded$ = new rxjs_1.BehaviorSubject(false);
        this.userNotFound$ = new rxjs_1.BehaviorSubject(false);
        this.user = this.store.select(FeatureReducer.getUserInfo);
        this.userStatus$ = this.store.select(FeatureReducer.getSearchStatus);
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userStatus$.subscribe(function (value) { return _this.userDataLoaded$.next(!"pristine|dirty|pending".includes(value)); });
    };
    SearchComponent.prototype.search = function () {
        if (!this.formGroup.valid)
            return;
        this.store.dispatch(new search_actions_1.Search(this.formGroup.value));
    };
    SearchComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "search",
                    template: "<mat-card fxFlex=\"450px\" *ngIf=\"(userStatus$ | async) == 'succeed'\">   <mat-card-header>     <mat-card-title>       <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">         <div fxFlex=\"nogrow\">           {{(user | async).LastName }}\u060C {{(user | async).FirstName }}         </div>         <div fxFlex=\"nogrow\">           {{(user | async).Email}}         </div>       </div>     </mat-card-title>   </mat-card-header>   <mat-card-content>     <div>       <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>         <mat-icon fxFlex='nogrow'>local_grocery_store</mat-icon>         <div fxFlex='15px'></div>         <p fxFlex='40'>\u0634\u0646\u0627\u0633\u0647</p>         <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async)._id }}</p>       </div>       <div class='list-item' fxFlexLayout='row' fxLayoutAlign='center center'>         <mat-icon fxFlex='nogrow'>email</mat-icon>         <div fxFlex='15px'></div>         <p fxFlex='40'>\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</p>         <p fxFlex='60' fxLayoutAlign=\"end\">{{(user | async).Email }}</p>       </div>     </div>    </mat-card-content> </mat-card>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return [
        { type: store_1.Store, },
    ]; };
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map