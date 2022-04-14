import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsuariosServiceService } from '../services/usuarios-service.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor(public authService:AuthService, public usuarioService:UsuariosServiceService) { }

  ngOnInit() {
  }

}
