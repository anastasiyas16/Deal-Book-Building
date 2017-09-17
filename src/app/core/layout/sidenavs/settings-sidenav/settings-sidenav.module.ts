import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdButtonModule, MdTabsModule, MdListModule, MdSlideToggleModule, MdToolbar,
  MdToolbarModule, MdSelectModule, MdDatepickerModule, MdNativeDateModule, MdInputModule, MdRadioModule,
  MdSliderModule, MdSnackBarModule, MdCheckboxModule, MdFormFieldModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SettingsSidenavComponent} from "./settings-sidenav.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MdToolbarModule,
    MdTabsModule,
    MdButtonModule,
    MdListModule,
    MdSlideToggleModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule,
    MdSliderModule,
    MdRadioModule,
    MdSnackBarModule,
    MdCheckboxModule,
    MdFormFieldModule
  ],
  declarations: [
    SettingsSidenavComponent
  ],
  exports: [
    SettingsSidenavComponent
  ]
})
export class SettingsSidenavModule {
}
