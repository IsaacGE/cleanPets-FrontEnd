import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradorPage } from './administrador.page';

const routes: Routes = [
  {
    path: '',
    component: AdministradorPage,
    children: [
      {
        path: 'bitacoraAcceso',
        loadChildren: () => import('../vista-admin/bitacora-acceso/bitacora-acceso.module').then(m => m.BitacoraAccesoPageModule)
      },
      {
        path: 'empleadosCtrl',
        loadChildren: () => import('../vista-admin/empleados-form/empleados-form.module').then(m => m.EmpleadosFormPageModule)
      },
      {
        path: 'listaClientes',
        loadChildren: () => import('../vista-admin/lista-clientes/lista-clientes.module').then(m => m.ListaClientesPageModule)
      },
      {
        path: 'listaCitas',
        loadChildren: () => import('../vista-admin/lista-citas/lista-citas.module').then(m => m.ListaCitasPageModule)
      },
      {
        path: 'ajustes',
        loadChildren: () => import('../ajustes/ajustes.module').then(m => m.AjustesPageModule)
      },
      {
        path: '',
        redirectTo: '/admin/bitacoraAcceso',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/admin/bitacoraAcceso',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorPageRoutingModule {}
