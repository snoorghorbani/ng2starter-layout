import { InjectionToken } from "@angular/core";
export interface LayoutModuleConfig {
    showMainSidenav: boolean;
    showSecondSideNav: boolean;
    secondSideNavMode: string;
    mainSideNavMode: string;
    mainSideNavItems: any[];
    showLeftNavBar: boolean;
    stickyLeftNavBar: boolean;
    layoutMode: string;
    title: string;
}
export declare const MODULE_DEFAULT_CONFIG: LayoutModuleConfig;
export declare const MODULE_CONFIG_TOKEN: InjectionToken<LayoutModuleConfig>;
