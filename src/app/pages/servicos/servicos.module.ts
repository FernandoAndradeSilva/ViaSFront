import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosListComponent } from './servicos-list/servicos-list.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ServicosListComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    SharedModule,
  ]
})
export class ServicosModule { }
