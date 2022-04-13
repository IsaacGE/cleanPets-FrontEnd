import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsuariosServiceService } from '../services/usuarios-service.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {

  constructor(public userService:UsuariosServiceService, public authService:AuthService, private route:Router) {
    
  }

  ngOnInit() {
  }

}
