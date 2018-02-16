import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { Actions } from "@ngrx/effects";
import { UserService } from "../services";
import { GetProfile } from "../profile-view";
export declare class UserEffects {
    private actions$;
    private router;
    private service;
    constructor(actions$: Actions<any>, router: Router, service: UserService);
    getProfileInformation$: Observable<GetProfile>;
}
