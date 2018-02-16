"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var flex_layout_1 = require("@angular/flex-layout");
var effects_1 = require("@ngrx/effects");
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var reducers_1 = require("./reducers");
var dumb_components_1 = require("./dumb-components");
var services_1 = require("./services");
var layout_config_1 = require("./layout.config");
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule.forRoot = function (config) {
        return {
            ngModule: RootLayoutModule,
            providers: [{ provide: layout_config_1.MODULE_CONFIG_TOKEN, useValue: config }, services_1.LayoutConfigurationService]
        };
    };
    LayoutModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        router_1.RouterModule,
                        forms_1.FormsModule,
                        http_1.HttpClientModule,
                        flex_layout_1.FlexLayoutModule,
                        material_1.MatIconModule,
                        material_1.MatButtonModule,
                        material_1.MatCardModule,
                        material_1.MatSnackBarModule,
                        material_1.MatSidenavModule,
                        material_1.MatExpansionModule,
                        material_1.MatSelectModule,
                        material_1.MatFormFieldModule,
                        material_1.MatListModule,
                        material_1.MatMenuModule,
                        material_1.MatRadioModule,
                        material_1.MatInputModule,
                        material_1.MatToolbarModule,
                        material_1.MatDatepickerModule,
                        material_1.MatProgressBarModule,
                        platform_browser_1.BrowserModule,
                        router_1.RouterModule,
                        animations_1.BrowserAnimationsModule
                    ],
                    declarations: [
                        dumb_components_1.MainMenuComponent,
                        dumb_components_1.SearchBoxComponent,
                        dumb_components_1.LogoContainerComponent,
                        dumb_components_1.ToolbarMenuComponent,
                        dumb_components_1.FooterComponent,
                        dumb_components_1.TitleComponent
                    ],
                    exports: [
                        dumb_components_1.MainMenuComponent,
                        dumb_components_1.SearchBoxComponent,
                        dumb_components_1.LogoContainerComponent,
                        dumb_components_1.ToolbarMenuComponent,
                        dumb_components_1.FooterComponent,
                        dumb_components_1.TitleComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    LayoutModule.ctorParameters = function () { return []; };
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
var RootLayoutModule = /** @class */ (function () {
    function RootLayoutModule() {
    }
    RootLayoutModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        LayoutModule,
                        store_1.StoreModule.forFeature("layout", reducers_1.LayoutReducers),
                        effects_1.EffectsModule.forFeature([])
                    ],
                    exports: [
                        dumb_components_1.MainMenuComponent,
                        dumb_components_1.SearchBoxComponent,
                        dumb_components_1.LogoContainerComponent,
                        dumb_components_1.ToolbarMenuComponent,
                        dumb_components_1.FooterComponent,
                        dumb_components_1.TitleComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    RootLayoutModule.ctorParameters = function () { return []; };
    return RootLayoutModule;
}());
exports.RootLayoutModule = RootLayoutModule;
//# sourceMappingURL=layout.module.js.map