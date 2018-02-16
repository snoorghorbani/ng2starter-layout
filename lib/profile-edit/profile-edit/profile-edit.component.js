"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var infra_1 = require("@soushians/infra");
var ProfileEditComponent = /** @class */ (function () {
    function ProfileEditComponent(utilityService) {
        this.utilityService = utilityService;
        this.submited = new core_1.EventEmitter();
    }
    ProfileEditComponent.prototype.ngOnInit = function () { };
    ProfileEditComponent.prototype.editProfile = function () {
        if (!this.formGroup.valid)
            return;
        this.submited.emit(this.formGroup.value);
    };
    ProfileEditComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'profile-edit',
                    template: "<div fxFlex=\"450px\">   <form [formGroup]=\"formGroup\" (ngSubmit)=\"editProfile()\" fxLayout=\"column\">     <mat-card>       <mat-card-content>         <mat-form-field fxFlexFill>           <input type=\"text\" matInput placeholder=\"\u067E\u0633\u062A \u0627\u0644\u06A9\u062A\u0631\u0648\u0646\u06CC\u06A9\u06CC\" formControlName=\"Email\">         </mat-form-field>         <mat-form-field>           <mat-select placeholder=\"Roles\" formControlName=\"Roles\" multiple>             <mat-select-trigger>               {{formGroup.controls.Roles.value ? formGroup.controls.Roles.value[0] : ''}}               <span *ngIf=\"formGroup.controls.Roles.value?.length > 1\">                 (+{{formGroup.controls.Roles.value.length - 1}} others)               </span>             </mat-select-trigger>             <mat-option *ngFor=\"let item of roles\" [value]=\"item\">{{item}}</mat-option>           </mat-select>         </mat-form-field>         <mat-form-field>           <mat-select placeholder=\"Groups\" formControlName=\"Groups\" multiple>             <mat-select-trigger>               {{formGroup.controls.Groups.value ? formGroup.controls.Groups.value[0] : ''}}               <span *ngIf=\"formGroup.controls.Groups.value?.length > 1\">                 (+{{formGroup.controls.Groups.value.length - 1}} others)               </span>             </mat-select-trigger>             <mat-option *ngFor=\"let item of groups\" [value]=\"item\">{{item}}</mat-option>           </mat-select>         </mat-form-field>       </mat-card-content>       <mat-card-actions fxLayoutAlign=\"center center\">         <button fxFlex=\"nogrow\" type=\"submit\" mat-raised-button color=\"primary\">\u0648\u06CC\u0631\u0627\u06CC\u0634</button>         <button fxFlex=\"nogrow\" type=\"button\" routerLink=\"/user/panel/profile\" mat-raised-button>\u0628\u0627\u0632\u06AF\u0634\u062A</button>       </mat-card-actions>     </mat-card>   </form> </div>"
                },] },
    ];
    /** @nocollapse */
    ProfileEditComponent.ctorParameters = function () { return [
        { type: infra_1.UtilityService, },
    ]; };
    ProfileEditComponent.propDecorators = {
        "submited": [{ type: core_1.Output },],
        "formGroup": [{ type: core_1.Input },],
        "roles": [{ type: core_1.Input },],
        "groups": [{ type: core_1.Input },],
    };
    return ProfileEditComponent;
}());
exports.ProfileEditComponent = ProfileEditComponent;
//# sourceMappingURL=profile-edit.component.js.map