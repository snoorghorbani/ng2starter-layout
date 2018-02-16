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
	templateUrl: "./logo-container.component.html",
	styleUrls: [ "./logo-container.component.scss" ]
})
export class LogoContainerComponent {
	toolbarAnimationState: string;

	constructor(private sdf: LayoutConfigurationService) {}
}
