import {Component, ViewChild} from '@angular/core';
import {routerTransition} from "./core/layout/router.animations";
import {MdSidenav} from "@angular/material";
import {LocalStorage} from "ngx-webstorage";

@Component({
  selector: 'angular-material-starter-kit',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {

  public showProgressBar: boolean = true;
  @ViewChild('sidenav')
  public sidenav: MdSidenav;
  @LocalStorage()
  public lightTheme: boolean;
  @LocalStorage()
  public darkTheme: boolean;

  constructor(){
    setTimeout(() => {
      this.showProgressBar = false;
    }, 2000);
  }


  public onSidenavToggleEvent(command: string) {
    console.debug("onSidenavToggleEvent received!")
    this.sidenav.open();
  }

}
