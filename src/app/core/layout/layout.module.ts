import {NgModule} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {
  MdToolbarModule, MdButtonModule, MdPaginatorModule, MdIconRegistry, MdIconModule,
  MdTabsModule, MdInputModule, MdFormFieldModule, MdCardModule, MdTooltipModule, MdMenuModule, MdDialogModule
} from "@angular/material";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CommonModule} from "@angular/common";
import {BigInputComponent} from "../../shared/components/big-input/big-input.component";
import {BigInputActionComponent} from "../../shared/components/big-input/big-input-action.component";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MdButtonModule,
    MdToolbarModule,
    MdPaginatorModule,
    MdIconModule,
    MdTabsModule,
    MdFormFieldModule,
    MdCardModule,
    MdInputModule,
    MdTooltipModule,
    MdMenuModule,
    MdDialogModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BigInputComponent,
    BigInputActionComponent
  ],
  providers: [
    MdIconRegistry
  ],
  exports: [
    FlexLayoutModule,
    HeaderComponent,
    FooterComponent,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule
  ],
  schemas: []
})
export class LayoutModule {
}
