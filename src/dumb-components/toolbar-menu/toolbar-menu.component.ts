import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from "@ngrx/store";
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { SignoutAction, OpenSecondSidenavAction, CloseSecondSidenavAction } from "../../actions";
import { FeatureState, getShowSecondSidebarStatus } from "../../reducers";

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.css']
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
