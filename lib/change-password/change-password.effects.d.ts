import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { PasswordService } from "../services";
import { ChangePasswordStart, ChangePasswordSucceed, ChangePasswordFailed } from "./change-password.actions";
export declare class ChangePasswordEffects {
    private actions$;
    private router;
    private passwordService;
    constructor(actions$: Actions<any>, router: Router, passwordService: PasswordService);
    ChangePasswordRequest$: Observable<ChangePasswordStart>;
    RequestChangePasswordLink$: Observable<ChangePasswordSucceed | ChangePasswordFailed>;
}
