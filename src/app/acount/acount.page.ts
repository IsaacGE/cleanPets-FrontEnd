import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../services/cuenta.service';

@Component({
  selector: 'app-acount',
  templateUrl: './acount.page.html',
  styleUrls: ['./acount.page.scss'],
})
export class AcountPage implements OnInit {

  constructor(private cuestionarios:CuentaService) { }

  ngOnInit() {
  }

}
