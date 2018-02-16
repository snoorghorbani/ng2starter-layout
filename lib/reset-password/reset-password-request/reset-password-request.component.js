"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Observable_1 = require("rxjs/Observable");
var material_1 = require("@angular/material");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var ResetPasswordRequestComponent = /** @class */ (function () {
    function ResetPasswordRequestComponent(snackBar) {
        this.snackBar = snackBar;
        this.submitted = new core_1.EventEmitter();
        this.maximumResendingHappend$ = new BehaviorSubject_1.BehaviorSubject(false);
        this.timer$ = Observable_1.Observable.timer(0, 100)
            .map(function (i) { return i + 1; })
            .takeWhile(function (i) { return i * 100 <= 3000; })
            .map(function (i) { return 3000 - i * 100; });
    }
    Object.defineProperty(ResetPasswordRequestComponent.prototype, "pending", {
        set: function (isPending) {
            if (isPending) {
                this.formGroup.disable();
            }
            this.formGroup.enable();
        },
        enumerable: true,
        configurable: true
    });
    ResetPasswordRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.numberOfRequested.subscribe(function (data) {
            if (data > 2) {
                _this.maximumResendingHappend$.next(true);
            }
        });
    };
    ResetPasswordRequestComponent.prototype.submit = function () {
        if (this.formGroup.valid) {
            this.submitted.emit(this.formGroup.value);
            var message = (this.maximumResendingHappend$.getValue())
                ? 'عدم امکان ...'
                : 'پیامک جدید برای شما ارسال گردید.';
            this.snackBar.open(message, '', {
                duration: 3000,
            });
        }
    };
    ResetPasswordRequestComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'user-reset-password-request',
                    template: "<form [formGroup]=\"formGroup\" (ngSubmit)=\"submit()\" fxLayout=\"column\">   <mat-card>     <mat-card-header>       <mat-card-title>         <h3>\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631</h3>       </mat-card-title>     </mat-card-header>     <mat-card-content>       <p>\u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F</p>       <mat-radio-group fxFlexFill formControlName=\"Type\">         <mat-radio-button value=\"sms\">\u067E\u06CC\u0627\u0645\u06A9</mat-radio-button>         <mat-radio-button value=\"email\">\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC</mat-radio-button>       </mat-radio-group>       <mat-form-field fxFlexFill>         <input matInput placeholder=\"\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646 \u0647\u0645\u0631\u0627\u0647\" formControlName=\"Username\">       </mat-form-field>     </mat-card-content>     <mat-card-actions>       <!--<button type=\"submit\" [disabled]='(canRequestPin | async) || (maximumResendingHappend$ | async)' (click)=\"submit()\" mat-raised-button color=\"primary\">-->       <button type=\"submit\" [disabled]='(canRequestPin | async)' (click)=\"submit()\" mat-raised-button color=\"primary\">         <span *ngIf='!(canRequestPin | async)'>           \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631         </span>         <!--<div *ngIf='(canRequestPin | async) && !(maximumResendingHappend$ | async)'>           {{timer$ | async}} \u062B\u0627\u0646\u06CC\u0647 \u062A\u0627 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0631 \u062E\u0648\u0627\u0633\u062A \u062F\u0648\u0628\u0627\u0631\u0647 \u062F\u0631\u06CC\u0627\u0641\u062A \u067E\u06CC\u0627\u0645\u06A9.         </div>         <div *ngIf='(maximumResendingHappend$ | async)'>           \u0639\u062F\u0645 \u0627\u0645\u06A9\u0627\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A         </div>-->       </button>       <a mat-button routerLink='/auth/signin'>\u0627\u0646\u0635\u0631\u0627\u0641</a>     </mat-card-actions>   </mat-card> </form>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ResetPasswordRequestComponent.ctorParameters = function () { return [
        { type: material_1.MatSnackBar, },
    ]; };
    ResetPasswordRequestComponent.propDecorators = {
        "submitted": [{ type: core_1.Output },],
        "formGroup": [{ type: core_1.Input },],
        "numberOfRequested": [{ type: core_1.Input },],
        "canRequestPin": [{ type: core_1.Input },],
        "pending": [{ type: core_1.Input },],
    };
    return ResetPasswordRequestComponent;
}());
exports.ResetPasswordRequestComponent = ResetPasswordRequestComponent;
//# sourceMappingURL=reset-password-request.component.js.map