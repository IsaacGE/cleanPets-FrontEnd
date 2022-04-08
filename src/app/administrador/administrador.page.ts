import { Component, OnInit } from '@angular/core';
import { UsuariosServiceService } from '../services/usuarios-service.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {

  constructor(public userService:UsuariosServiceService) {
    
  }

  ngOnInit() {
  }

}
