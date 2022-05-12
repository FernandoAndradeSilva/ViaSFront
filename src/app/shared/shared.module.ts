import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableModule} from "primeng/table";
import {ToolbarModule} from "primeng/toolbar";
import {SplitButtonModule} from "primeng/splitbutton";
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from "primeng/dialog";
import {SelectButtonModule} from "primeng/selectbutton";
import {FormsModule } from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';
import {MenuModule} from 'primeng/menu';
import {PanelModule} from 'primeng/panel';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ToolbarModule,
    SplitButtonModule,
    InputTextModule,
    DialogModule,
    SelectButtonModule,
    FormsModule,
    InputMaskModule,
    MenuModule,
    PanelModule,
    CalendarModule,
  ],

  exports: [
    TableModule,
    ToolbarModule,
    SplitButtonModule,
    InputTextModule,
    DialogModule,
    SelectButtonModule,
    FormsModule,
    InputMaskModule,
    MenuModule,
    PanelModule,
    CalendarModule,
  ]

})
export class SharedModule {
}
