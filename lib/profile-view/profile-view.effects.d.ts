import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { UserService } from "../services";
import { GetProfileStart, GetProfileSucceed, GetProfileFailed } from "./profile-view.actions";
import { RefreshUserInfoAction } from "../dashboard";
export declare class ProfileViewEffects {
    private actions$;
    private router;
    private userService;
    constructor(actions$: Actions<any>, router: Router, userService: UserService);
    ProfileRequest$: Observable<GetProfileStart>;
    getProfile$: Observable<GetProfileSucceed | GetProfileFailed>;
    refreshUserInfo$: Observable<RefreshUserInfoAction>;
}
