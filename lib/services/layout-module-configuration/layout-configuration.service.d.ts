import { Store } from "@ngrx/store";
import { ConfigState } from "@soushians/config";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
export declare class LayoutConfigurationService {
    private store;
    private _config;
    readonly config: any;
    config$: BehaviorSubject<any>;
    constructor(configFile: any, store: Store<ConfigState>);
}
