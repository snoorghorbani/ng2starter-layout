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

export const MODULE_DEFAULT_CONFIG: LayoutModuleConfig = {
	showMainSidenav: false,
	showSecondSideNav: true,
	secondSideNavMode: "over", //| "push" | "side",
	mainSideNavMode: "over", //| "push" | "side",
	mainSideNavItems: [],
	showLeftNavBar: false,
	stickyLeftNavBar: false,
	layoutMode: "with-margin", // | "without-margin" | "default",
	title: ""
};

export const MODULE_CONFIG_TOKEN = new InjectionToken<LayoutModuleConfig>("LayoutModuleConfig");
