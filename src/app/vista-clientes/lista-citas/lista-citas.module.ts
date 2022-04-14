import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCitasPageRoutingModule } from './lista-citas-routing.module';

import { ListaCitasPage } from './lista-citas.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCitasPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ListaCitasPage]
})
export class ListaCitasPageModule {}
