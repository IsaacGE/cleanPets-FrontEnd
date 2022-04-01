import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitacoraAccesoPageRoutingModule } from './bitacora-acceso-routing.module';

import { BitacoraAccesoPage } from './bitacora-acceso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitacoraAccesoPageRoutingModule
  ],
  declarations: [BitacoraAccesoPage]
})
export class BitacoraAccesoPageModule {}
