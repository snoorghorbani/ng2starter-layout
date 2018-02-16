import { EventEmitter, ElementRef, AfterViewInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as layoutReducer from "../../reducers";
import { responseStatusTypes } from "@soushians/shared";
import { SigninService } from "@soushians/authentication";
export declare class MainMenuComponent implements AfterViewInit {
    private store;
    signinService: SigninService;
    closeSidebar: EventEmitter<{}>;
    authenticated: Observable<boolean>;
    customerStatus$: Observable<responseStatusTypes>;
    routes: any;
    customerMobileInput: ElementRef;
    constructor(store: Store<layoutReducer.State>, signinService: SigninService);
    ngAfterViewInit(): void;
}
