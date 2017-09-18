/**
 * RMS - Embedded Systems - Order Automation System
 * Base routing.
 * Includes lazy loaded modules.
 *
 * @author Gökhan Sari <g-sari@g-sari.com>
 * @copyright BICSOLUTIONS 2017
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DealComponent} from "./deal/deal.component";

const APP_ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: DealComponent, children: [], canActivate: []},
];

export const APP_ROUTING_MODULE: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {
  useHash: false,
  enableTracing: false,
  initialNavigation: true
});
