import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'servicos' ,   loadChildren: () => import('./pages/servicos/servicos.module').then(m => m.ServicosModule) },
  { path: 'historicos' ,   loadChildren: () => import('./pages/historicos/historicos.module').then(m => m.HistoricosModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
