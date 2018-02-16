import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from "@ngrx/store";
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { SignoutAction, OpenSecondSidenavAction, CloseSecondSidenavAction } from "../../actions";
import { FeatureState, getShowSecondSidebarStatus } from "../../reducers";

@Component({
  selector: 'app-toolbar-menu',
  template: `<button mat-icon-button type="button" (click)="toggleSecondSidebar()" fxFlex="nogrow" fxLayoutAlign="center center">   <mat-icon>notifications</mat-icon> </button> <button mat-icon-button [matMenuTriggerFor]="toolbarMenu1">   <mat-icon>account_circle</mat-icon> </button> <button mat-icon-button (click)='goback()'>   <mat-icon>arrow_back</mat-icon> </button>  <mat-menu #toolbarMenu1>   <button routerLink='/user/panel' mat-menu-item>     <mat-icon>fingerprint</mat-icon>     <span>پنل کاربری</span>   </button>    <button (click)='signout()' mat-menu-item>     <mat-icon>exit_to_app</mat-icon>     <span>خروج</span>   </button>  </mat-menu>`,
  styles: [`/*.upper-menu { float: left; position: absolute; left: 0; top: 30px; } .upper-menu a { border-left: 1px solid #eee; color: #222; padding: 0 5px 0 8px; font-size: 14px; text-decoration: none; cursor: pointer; } .upper-menu a:hover { color: #f16321; } .upper-menu .last { border: none; } .upper-menu-div { padding: 0 10px; border-left: 1px solid #ddd; } .upper-menu-div-last { padding: 0 10px; }  :host{     width: 100%; }*/`]
})
export class ToolbarMenuComponent {
  showSecondSidenav: Observable<boolean>;

  constructor(private _location: Location, private store: Store<FeatureState>) {
    this.showSecondSidenav = this.store.select(getShowSecondSidebarStatus);
  }
  signout() {
    this.store.dispatch(new SignoutAction());
  }
  goback() {
    this._location.back();
  }
  toggleSecondSidebar() {
    let action;
    this.showSecondSidenav.subscribe((state) => {
      action = state ? new CloseSecondSidenavAction() : new OpenSecondSidenavAction();
    });
    this.store.dispatch(action);
  }
}
