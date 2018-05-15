import { Store } from "@ngrx/store";
import { Location } from "@angular/common";
import { Observable } from "rxjs/Observable";
import { FeatureState } from "../../reducers";
import { LayoutConfigurationService } from "../../services";
export declare class ToolbarMenuComponent {
    private document;
    private _location;
    private store;
    configurationService: LayoutConfigurationService;
    showSecondSidenav: Observable<boolean>;
    showSidebarMenu: any;
    app_config: any;
    showMainSidenav: Observable<boolean>;
    toolbarAnimationState: Observable<string>;
    menuItems$: Observable<any[]>;
    lastScroll: number;
    constructor(document: Document, _location: Location, store: Store<FeatureState>, configurationService: LayoutConfigurationService);
    onWindowScroll(): void;
    signout(): void;
    goback(): void;
    toggleSecondSidebar(): void;
    toggleMainSidebar(): void;
}
