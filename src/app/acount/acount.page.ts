import { Component, OnInit } from '@angular/core';
import { RoutesServiceService } from '../services/routes-service.service';
import { UsuariosServiceService } from '../services/usuarios-service.service';

@Component({
  selector: 'app-acount',
  templateUrl: './acount.page.html',
  styleUrls: ['./acount.page.scss'],
})
export class AcountPage implements OnInit {

  constructor(public userService:UsuariosServiceService, public routerService:RoutesServiceService) {

  }

  ngOnInit() {
  }

}
