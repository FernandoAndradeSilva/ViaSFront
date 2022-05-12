import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricosRoutingModule } from './historicos-routing.module';
import { HistoricosListComponent } from './historicos-list/historicos-list.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    HistoricosListComponent
  ],
  imports: [
    CommonModule,
    HistoricosRoutingModule,
    SharedModule,
  ]
})
export class HistoricosModule { }
