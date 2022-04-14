import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleados-form',
  templateUrl: './empleados-form.page.html',
  styleUrls: ['./empleados-form.page.scss'],
})
export class EmpleadosFormPage implements OnInit {

  constructor(public empleadosService:EmpleadosService) { }

  ngOnInit() {
  }

}
