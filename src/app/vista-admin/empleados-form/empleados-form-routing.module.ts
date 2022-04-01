import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadosFormPage } from './empleados-form.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleadosFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleadosFormPageRoutingModule {}
