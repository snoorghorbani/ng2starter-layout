import { Store } from "@ngrx/store";
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { FeatureState } from "../../reducers";
export declare class ToolbarMenuComponent {
    private _location;
    private store;
    showSecondSidenav: Observable<boolean>;
    constructor(_location: Location, store: Store<FeatureState>);
    signout(): void;
    goback(): void;
    toggleSecondSidebar(): void;
}
