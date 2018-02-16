"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.MODULE_DEFAULT_CONFIG = {
    showMainSidenav: false,
    showSecondSideNav: true,
    secondSideNavMode: "over",
    //| "push" | "side",
    mainSideNavMode: "over",
    //| "push" | "side",
    mainSideNavItems: [],
    showLeftNavBar: false,
    stickyLeftNavBar: false,
    layoutMode: "with-margin",
    // | "without-margin" | "default",
    title: ""
};
exports.MODULE_CONFIG_TOKEN = new core_1.InjectionToken("LayoutModuleConfig");
//# sourceMappingURL=layout.config.js.map