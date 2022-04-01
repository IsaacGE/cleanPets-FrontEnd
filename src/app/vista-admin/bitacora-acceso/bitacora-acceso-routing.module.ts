import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitacoraAccesoPage } from './bitacora-acceso.page';

const routes: Routes = [
  {
    path: '',
    component: BitacoraAccesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BitacoraAccesoPageRoutingModule {}
