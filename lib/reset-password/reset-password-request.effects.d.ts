import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { DisableGetLink, EnableGetLink, MaximumTryHappend, ResetPasswordLinkRequestStart, ResetPasswordLinkRequestSucceed, ResetPasswordLinkRequestFailed } from "./reset-password-request.actions";
import { PasswordService } from "../services";
export declare class ResetPasswordRequestEffects {
    private actions$;
    private router;
    private passwordService;
    constructor(actions$: Actions<any>, router: Router, passwordService: PasswordService);
    ResetPasswordRequest$: Observable<ResetPasswordLinkRequestStart | MaximumTryHappend>;
    MaximumTryHappend$: Observable<DisableGetLink>;
    enableAfterTime$: Observable<EnableGetLink>;
    RequestResetPasswordLink$: Observable<ResetPasswordLinkRequestSucceed | ResetPasswordLinkRequestFailed>;
}
