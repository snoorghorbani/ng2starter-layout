import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { UserService } from "../services";
import { EditProfileStart, EditProfileSucceed, EditProfileFailed } from "./edit-profile.actions";
import { GetProfile } from "../profile-view";
export declare class EditProfileEffects {
    private actions$;
    private router;
    private service;
    constructor(actions$: Actions<any>, router: Router, service: UserService);
    EditProfileRequest$: Observable<EditProfileStart>;
    RequestEditProfileLink$: Observable<EditProfileSucceed | EditProfileFailed>;
    goToView$: Observable<GetProfile>;
}
