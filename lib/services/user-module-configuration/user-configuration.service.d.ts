import { Store } from "@ngrx/store";
import { UserModuleConfig } from "../../user.config";
import { UserState } from "../../feature/feature.reducers";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
export declare class UserConfigurationService {
    private store;
    private _config;
    readonly config: UserModuleConfig;
    config$: BehaviorSubject<UserModuleConfig>;
    constructor(configFile: any, store: Store<UserState>);
}
