"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.sex$ = new BehaviorSubject_1.BehaviorSubject('');
        this.identifierType$ = new BehaviorSubject_1.BehaviorSubject('');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.information.subscribe(function (data) {
            if (data == null)
                return;
        });
    };
    ProfileComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'user-profile',
                    template: "<div fxFlex=\"450px\">   <mat-card>     <mat-card-header>       <mat-card-title>\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u067E\u0631\u0648\u0641\u0627\u06CC\u0644</mat-card-title>     </mat-card-header>     <mat-card-content *ngIf='userDataStatus$ | async'>       <div class='list-item' fxFlexLayout='row'>         <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>         <p fxFlex='60'>{{(userInformation | async).Email}}</p>       </div>       <div class='list-item' fxFlexLayout='row'>         <p fxFlex='40'>roles</p>         <p fxFlex='60'>{{(userInformation | async).Roles | json}}</p>       </div>       <!-- <div class='list-item' fxFlexLayout='row'>         <p fxFlex='40'>\u0646\u0627\u0645</p>         <p fxFlex='60'>{{(userInformation | async).FirstName}}</p>       </div>       <div class='list-item' fxFlexLayout='row'>         <p fxFlex='40'>\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC</p>         <p fxFlex='60'>{{(userInformation | async).LastName}}</p>       </div>       <div class='list-item' fxFlexLayout='row'>         <p fxFlex='40'>\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC</p>         <p fxFlex='60'>{{(userInformation | async).Username}}</p>       </div>       <div class='list-item' fxFlexLayout='row'>         <p fxFlex='40'>\u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647</p>         <p fxFlex='60'>{{(userInformation | async).MobileNumber | persianNumber}}</p>       </div>       <div class='list-item' fxFlexLayout='row'>         <p fxFlex='40'>\u062C\u0646\u0633\u06CC\u062A</p>         <p fxFlex='60'>{{sex$ | async}}</p>       </div>       <div class='list-item' fxFlexLayout='row'>         <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u062A\u0648\u0644\u062F</p>         <p fxFlex='60'>{{(userInformation | async).Birthdate | persianDate : false}}</p>       </div>       <div class='list-item' fxFlexLayout='row'>         <p fxFlex='40'>\u0627\u06CC\u0645\u06CC\u0644</p>         <p fxFlex='60'>{{(userInformation | async).Email}}</p>       </div>       <div class='list-item' fxFlexLayout='row'>         <p fxFlex='40'>{{(identifierType$ | async)}}</p>         <p fxFlex='60'>{{(userInformation | async).IdentificationNo | persianNumber}}</p>       </div>       <div class='list-item' fxFlexLayout='row'>         <p fxFlex='40'>\u062A\u0627\u0631\u06CC\u062E \u0639\u0636\u0648\u06CC\u062A</p>         <p fxFlex='60'>{{(userInformation | async).RegisterDate | persianDate}}</p>       </div> -->     </mat-card-content>      <mat-card-actions>       <button id=\"profile-edit-button\" fxFlex mat-raised-button color=\"primary\" routerLink='edit'>\u0648\u06CC\u0631\u0627\u06CC\u0634</button>     </mat-card-actions>   </mat-card> </div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ProfileComponent.ctorParameters = function () { return []; };
    ProfileComponent.propDecorators = {
        "information": [{ type: core_1.Input },],
        "dataStatus$": [{ type: core_1.Input },],
    };
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map