import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { UserService } from "../services";
import { SearchStartAction, SearchFailed, SearchSucceed } from "./search.actions";
export declare class SearchEffects {
    private actions$;
    private router;
    private userService;
    constructor(actions$: Actions<any>, router: Router, userService: UserService);
    canSearch$: Observable<SearchStartAction>;
    search$: Observable<SearchSucceed | SearchFailed>;
}
