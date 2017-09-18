import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {APP_ROUTING_MODULE} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {MdSidenavModule, MdCardModule, MdProgressBarModule, MdIconModule, MdButtonModule} from "@angular/material";

import {SettingsSidenavModule} from "./core/layout/sidenavs/settings-sidenav/settings-sidenav.module";
import {Ng2Webstorage} from "ngx-webstorage";
import {DealComponent,DialogDataExample, DialogDataExampleDialog} from './deal/deal.component';
import {SigninDialogComponent} from "./shared/signin/signin-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    DealComponent,
    SigninDialogComponent,
    DialogDataExample, DialogDataExampleDialog
  ],
  entryComponents: [SigninDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING_MODULE,
    Ng2Webstorage,
    RouterModule,
    MdSidenavModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,
    SettingsSidenavModule,
    MdProgressBarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent,DialogDataExample, DialogDataExampleDialog]
})
export class AppModule {
}
