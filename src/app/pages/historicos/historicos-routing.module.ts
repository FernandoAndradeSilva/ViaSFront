import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HistoricosListComponent} from "./historicos-list/historicos-list.component";

const routes: Routes = [

  { path: '', component: HistoricosListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricosRoutingModule { }
