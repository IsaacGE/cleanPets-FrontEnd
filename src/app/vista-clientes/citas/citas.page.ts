import { Component, OnInit } from '@angular/core';
import { CitasServiceService } from 'src/app/services/citas-service.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {

  constructor(public servicioCitas:CitasServiceService) {
  }

  ngOnInit() {
  }

}
