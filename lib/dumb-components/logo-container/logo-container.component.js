"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var LogoContainerComponent = /** @class */ (function () {
    function LogoContainerComponent(sdf) {
        this.sdf = sdf;
    }
    LogoContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "app-logo-container",
                    template: "<div id=\"background\"></div>   <img class=\"shatelLogoAnimation\" routerLink='/' src='../../../assets/images/shatel-logo.png' /> <!--<img class=\"logoTypeAnimation\" src='../../../assets/images/logo-type.png' />-->",
                    styles: [".shatelLogoAnimation {     height: 35px;     cursor: pointer;     z-index: 2; }  #background {     position: absolute;     top: 0;     right: 0;     width: 300px;     height: 70px; }"]
                },] },
    ];
    /** @nocollapse */
    LogoContainerComponent.ctorParameters = function () { return [
        { type: services_1.LayoutConfigurationService, },
    ]; };
    return LogoContainerComponent;
}());
exports.LogoContainerComponent = LogoContainerComponent;
//# sourceMappingURL=logo-container.component.js.map