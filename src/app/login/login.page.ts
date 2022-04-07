import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../services/cuenta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private cuestionarios:CuentaService) { }

  ngOnInit() {
  }

}
