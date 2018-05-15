import { NgModule, ModuleWithProviders } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { EffectsModule } from "@ngrx/effects";
import {
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatSnackBarModule,
	MatSidenavModule,
	MatExpansionModule,
	MatSelectModule,
	MatFormFieldModule,
	MatListModule,
	MatMenuModule,
	MatRadioModule,
	MatInputModule,
	MatToolbarModule,
	MatDatepickerModule,
	MatProgressBarModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LayoutReducers } from "./reducers";
import {
	MainMenuComponent,
	SearchBoxComponent,
	LogoContainerComponent,
	ToolbarMenuComponent,
	FooterComponent,
	TitleComponent,
	MainComponent
} from "./dumb-components";
import { LayoutConfigurationService } from "./services";
import { MODULE_CONFIG_TOKEN, LayoutModuleConfig } from "./layout.config";

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		HttpClientModule,
		FlexLayoutModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatSnackBarModule,
		MatSidenavModule,
		MatExpansionModule,
		MatSelectModule,
		MatFormFieldModule,
		MatListModule,
		MatMenuModule,
		MatRadioModule,
		MatInputModule,
		MatToolbarModule,
		MatDatepickerModule,
		MatProgressBarModule,
		BrowserModule,
		RouterModule,
		BrowserAnimationsModule
	],
	declarations: [
		MainMenuComponent,
		SearchBoxComponent,
		LogoContainerComponent,
		ToolbarMenuComponent,
		FooterComponent,
		TitleComponent,
		MainComponent
	],
	exports: [
		MainMenuComponent,
		SearchBoxComponent,
		LogoContainerComponent,
		ToolbarMenuComponent,
		FooterComponent,
		TitleComponent,
		MainComponent
	]
})
export class NgsLayoutModule {
	static forRoot(config?: LayoutModuleConfig): ModuleWithProviders {
		return {
			ngModule: RootNgsLayoutModule,
			providers: [ { provide: MODULE_CONFIG_TOKEN, useValue: config }, LayoutConfigurationService ]
		};
	}
}

@NgModule({
	imports: [ NgsLayoutModule, StoreModule.forFeature("layout", LayoutReducers), EffectsModule.forFeature([]) ],
	exports: [ NgsLayoutModule ]
})
export class RootNgsLayoutModule {}
