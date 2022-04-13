import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesPage } from './clientes.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesPage,
    children: [
      {
        path: 'citas',
        loadChildren: () => import('../vista-clientes/citas/citas.module').then(m => m.CitasPageModule)
      },
      {
        path: 'listaCitas',
        loadChildren: () => import('../vista-clientes/lista-citas/lista-citas.module').then(m => m.ListaCitasPageModule)
      },
      {
        path: 'infoServicios',
        loadChildren: () => import('../vista-clientes/servicios/servicios.module').then(m => m.ServiciosPageModule)
      },
      {
        path: 'ubicacion',
        loadChildren: () => import('../vista-clientes/ubicacion/ubicacion.module').then(m => m.UbicacionPageModule)
      },
      {
        path: 'ajustes',
        loadChildren: () => import('../ajustes/ajustes.module').then(m => m.AjustesPageModule)
      },
      {
        path: '',
        redirectTo: '/user/citas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/user/citas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesPageRoutingModule {}
