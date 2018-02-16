import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FormGroup } from "@angular/forms";
import { Store } from "@ngrx/store";
import { ConfigModel } from "@soushians/config";
import { UserModel } from "../../models";
import * as FeatureReducer from "../../feature/feature.reducers";
export declare class ProfileEditContainerComponent implements OnInit {
    private store;
    userInforamation$: Observable<UserModel>;
    formGroup: FormGroup;
    appConfig: Observable<ConfigModel<any>>;
    groups: Observable<string[]>;
    constructor(store: Store<FeatureReducer.FeatureState>);
    ngOnInit(): void;
    updateProfile(data: any): void;
}
