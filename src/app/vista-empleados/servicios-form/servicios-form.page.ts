import { Component, OnInit } from '@angular/core';
import { CitasServiceService } from 'src/app/services/citas-service.service';
import { ServiciosServiceService } from 'src/app/services/servicios-service.service';
@Component({
  selector: 'app-servicios-form',
  templateUrl: './servicios-form.page.html',
  styleUrls: ['./servicios-form.page.scss'],
})
export class ServiciosFormPage implements OnInit {

  constructor( public serviciosservice:ServiciosServiceService) { 
      this.serviciosservice.getServicios()
    }
    

  ngOnInit() {
  }

}
