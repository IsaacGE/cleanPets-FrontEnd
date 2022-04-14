import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadosPage } from './empleados.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleadosPage,
    children: [
      {
        path: 'serviciosCtrl',
        loadChildren: () => import('../vista-empleados/servicios-form/servicios-form.module').then(m => m.ServiciosFormPageModule)
      },
      {
        path: 'ajustes',
        loadChildren: () => import('../ajustes/ajustes.module').then(m => m.AjustesPageModule)
      },
      {
        path: '',
        redirectTo: '/employee/serviciosCtrl',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/employee/serviciosCtrl',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleadosPageRoutingModule {}
