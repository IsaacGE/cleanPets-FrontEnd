import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutesServiceService {

  constructor(private route:Router) { }

  EnviarAcount() {
    this.route.navigate(['acount'])
  }
  Enviarlogin() {
    this.route.navigate(['/'])
  }
}
