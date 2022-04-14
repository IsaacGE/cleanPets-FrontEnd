import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'acount',
    loadChildren: () => import('./acount/acount.module').then( m => m.AcountPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesPageModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./empleados/empleados.module').then(m => m.EmpleadosPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./administrador/administrador.module').then(m => m.AdministradorPageModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },  {
    path: 'lista-empleados',
    loadChildren: () => import('./vista-admin/lista-empleados/lista-empleados.module').then( m => m.ListaEmpleadosPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
