import { Component, OnInit } from '@angular/core';
import { UsuariosServiceService } from 'src/app/services/usuarios-service.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.page.html',
  styleUrls: ['./lista-clientes.page.scss'],
})
export class ListaClientesPage implements OnInit {

  constructor(public userService:UsuariosServiceService) { }

  ngOnInit() {
  }

}
