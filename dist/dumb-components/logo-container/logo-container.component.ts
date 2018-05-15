import {
	Component,
	ViewChild,
	AfterViewInit,
	ElementRef,
	trigger,
	state,
	style,
	transition,
	animate
} from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { LayoutConfigurationService } from "../../services";

@Component({
	selector: "app-logo-container",
	template: `<div id="background"></div>   <img class="shatelLogoAnimation" routerLink='/' src='../../../assets/images/shatel-logo.png' /> <!--<img class="logoTypeAnimation" src='../../../assets/images/logo-type.png' />-->`,
	styles: [`.shatelLogoAnimation {     height: 35px;     cursor: pointer;     z-index: 2; }  #background {     position: absolute;     top: 0;     right: 0;     width: 300px;     height: 70px; }`]
})
export class LogoContainerComponent {
	toolbarAnimationState: string;

	constructor(private sdf: LayoutConfigurationService) {}
}
