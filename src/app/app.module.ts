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
import {MdSidenavModule, MdCardModule, MdProgressBarModule, MdIconModule} from "@angular/material";
import {SettingsSidenavModule} from "./core/layout/sidenavs/settings-sidenav/settings-sidenav.module";
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";
import {YoutubeSafeUrlPipe} from "./shared/youtube/YoutubeSafeUrlPipe";
import {YoutubeAPIService} from "./shared/youtube/youtube-api.service";
import {YoutubeInteractionService} from "./shared/youtube/youtube-interaction.service";
import {Ng2Webstorage} from "ngx-webstorage";
import {CreditsComponent} from './credits/credits.component';
import {SigninDialogComponent} from "./shared/signin/signin-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlayerComponent,
    YoutubeSafeUrlPipe,
    CreditsComponent,
    SigninDialogComponent
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
    SettingsSidenavModule,
    MdProgressBarModule
  ],
  providers: [
    YoutubeAPIService,
    YoutubeInteractionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
