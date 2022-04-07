import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(private enviar:Router) { }

  EnviarAcount() {
    this.enviar.navigate(['acount'])
  }
  Enviarlogin() {
    this.enviar.navigate(['/'])
  }
}
