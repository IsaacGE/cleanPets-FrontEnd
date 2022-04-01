import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleadosFormPageRoutingModule } from './empleados-form-routing.module';

import { EmpleadosFormPage } from './empleados-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadosFormPageRoutingModule
  ],
  declarations: [EmpleadosFormPage]
})
export class EmpleadosFormPageModule {}
