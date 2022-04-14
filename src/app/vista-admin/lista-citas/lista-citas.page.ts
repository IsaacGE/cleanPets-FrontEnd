import { Component, OnInit } from '@angular/core';
import { CitasServiceService } from 'src/app/services/citas-service.service';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.page.html',
  styleUrls: ['./lista-citas.page.scss'],
})

export class ListaCitasPage implements OnInit {
  
  constructor(public servicioCitas:CitasServiceService) {
    this.servicioCitas.getCitas()
  }

  ngOnInit() {
  }

}
