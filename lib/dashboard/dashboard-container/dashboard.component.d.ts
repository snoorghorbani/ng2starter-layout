import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { UserModel } from "@soushians/authentication";
import { Store } from "@ngrx/store";
import * as appReducer from "../../feature/feature.reducers";
import { SigninService } from "@soushians/authentication";
export declare class DashboardContainerComponent implements OnInit {
    private store;
    signinService: SigninService;
    user$: Observable<UserModel>;
    constructor(store: Store<appReducer.UserState>, signinService: SigninService);
    ngOnInit(): void;
}
